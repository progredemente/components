import React, { Component, createRef } from 'react';
import './GIFer.css';
import { GIFEncoder } from './GIFEncoder';
import Icon from './Icon';
import ImageCropperModal from './ImageCropperModal';
import i18n from './i18nGIFer.json';
import AppsBar from './AppsBar';


class GIFer extends Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            gif: null,
            loadedImage: null,
            crop: null
        }
        this.lang = this.props.lang || 'es';
        this.i18n = this.lang in i18n ? i18n[this.lang] : i18n['es'];
        this.scaleFactor = .25;
        this.side = 1500;
        this.img = null;
        this.defaultImg = null;
        this.cropperModalRef = this.props.withCropper ? createRef() : null;
    }

    componentDidMount(){
        this.img = new Image();
        this.img.src = this.props.sourceImageUrl;
        this.img.onload = () => {
            if(this.props.defaultImgs) {
                this.defaultImg = new Image();
                this.defaultImg.src = this.props.defaultImgs[Math.floor(Math.random() * this.props.defaultImgs.length)];
                this.defaultImg.onload = () => {
                    this.setState({loaded: true});
                    this.create();
                }
            }
            else {
                this.setState({loaded: true});
                this.create();
            }
        }
    }

    setCrop(crop) {
        this.setState({crop}, this.create);
    }

    create() {
        let encoder = new GIFEncoder();
        let canvas = document.createElement('canvas');
        canvas.width = this.side * this.scaleFactor;
        canvas.height = this.side * this.scaleFactor;
        let context = canvas.getContext('2d', { willReadFrequently: true });
        encoder.start();

        this.props.create(encoder, context, this.img, this.state.crop || this.state.loadedImage || this.defaultImg, this.scaleFactor, this.side, this.clear.bind(this));
        
        encoder.finish();
        let binaryGif = encoder.stream().getData();
        this.setState({ gif: `data:image/gif;base64,${window.btoa(binaryGif)}`})
    }

    clear(context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, this.side * this.scaleFactor, this.side * this.scaleFactor)
    }

    download() {
        let link = document.createElement('a');
        link.download = `${this.props.appId}.gif`;
        link.href = this.state.gif;
        link.click();
    }

    load() {
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/png, image/jpeg';
        input.onchange = () => {
            let fr = new FileReader();
            fr.addEventListener('load', (e) => {
                let loadedImage = new Image();
                loadedImage.src = e.target.result;
                loadedImage.onload = () => {
                    this.setState({loadedImage}, () => {
                        if(this.cropperModalRef) {
                            this.cropperModalRef.current.showModal();
                        }
                        else {
                            this.create();
                        }
                    });
                }
            });
            fr.readAsDataURL(input.files[0]);
        }
        input.click();
    }

    render() {
        return (
            <AppsBar current={this.props.appId}>
                {
                    !this.state.loaded &&
                    <div className="gifer-loading">
                        <img src={this.props.loadingImageUrl} alt={this.i18n.loading} />
                        {this.i18n.loading}
                    </div>
                }
                {
                    this.state.loaded && this.state.gif &&
                    <div className="gifer-app">
                        <div className="gifer-title">
                            <img
                                src={this.props.sourceImageUrl}
                                alt={this.props.title}
                            />
                            <div>{this.i18n.by} <a href="/" target="_blank">progredemente</a></div>
                        </div>
                        <img
                            src={this.state.gif}
                            alt="gif"
                            className="gifer-gif"
                        />
                        <div className="gifer-buttons">
                            <div
                                className="prg-button"
                                onClick={() => {
                                    this.load()
                                }}
                            >
                                {
                                    this.props.loadButtonText || this.i18n.loadButtonText
                                }
                                &nbsp;<Icon icon={this.props.loadButtonIncon || "F"} />
                            </div>
                            {
                                this.state.loadedImage &&
                                <>
                                    {
                                        this.cropperModalRef &&
                                        <div
                                            className="prg-button"
                                            onClick={() => {
                                                this.cropperModalRef.current.showModal();
                                            }}
                                        >
                                            {
                                                this.props.editButtonText || this.i18n.editButtonText
                                            }
                                            &nbsp;<Icon icon="E" />
                                        </div>
                                    }
                                    <div
                                        className="prg-button gifer-download"
                                        onClick={() => {
                                            this.download()
                                        }}
                                    >
                                        {this.i18n.downloadButtonText}&nbsp;<Icon icon="D" />
                                    </div>
                                </>
                            }
                        </div>
                        {
                            this.cropperModalRef && this.state.loadedImage && 
                            <ImageCropperModal
                                setCrop={(crop) => this.setCrop(crop)}
                                image={this.state.loadedImage}
                                ref={this.cropperModalRef}
                                lang={this.lang}
                            />
                        }
                    </div>
                }
            </AppsBar>
        );
    }
}

export default GIFer;
