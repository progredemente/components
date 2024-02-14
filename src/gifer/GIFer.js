import React, { Component, createRef } from 'react';
import './GIFer.css';
import { LZWEncoder, NeuQuant, Test } from './GIFEncoder';
import createGif from './createGif';
import Icon from '../icon/Icon';
import ImageCropperModal from '../image-cropper-modal/ImageCropperModal';
import i18n from './i18nGIFer.json';
import AppsBar from '../apps-bar/AppsBar';


class GIFer extends Component {

    constructor(props){
        super(props);
        this.state = {
            pageLoaded: false,
            gif: null,
            loadedImage: null,
            crop: null,
            imageProcessing: false
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
                    this.initWorker();
                    this.create();
                }
            }
            else {
                this.initWorker();
                this.create();
            }
        }
    }

    initWorker(){
        const functions = [
            LZWEncoder,
            NeuQuant,
            GIFEncoder,
            ...(this.props.deps || []),
            this.props.create,
            Test,
            `(${createGif.toString()})()`
        ].map(f => f.toString()).join("\n");
        const createGifCode = new Blob([`(() => {${functions}})()`]);
        this.worker = new Worker(URL.createObjectURL(createGifCode));
        this.worker.addEventListener('message',(ev) => {
            this.setState({ gif: ev.data, pageLoaded: true, imageProcessing: false });
        });
    }

    setCrop(crop) {
        this.setState({crop}, this.create);
    }

    create() {
        this.setState({ imageProcessing: true }, async () => {
            const img = await createImageBitmap(this.img);
            const custom = this.state.crop || this.state.loadedImage || this.defaultImg;
            let customImage = null;
            if(custom){
                customImage = await createImageBitmap(custom)
            }
            this.worker.postMessage({
                img,
                customImage,
                side: this.side,
                scaleFactor: this.scaleFactor,
                fontUrl: `${process.env.RESOURCES_URL}/comic_typo.ttf`
            })
        })
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
                    !this.state.pageLoaded &&
                    <div className="gifer-loading">
                        <img src={this.props.loadingImageUrl} alt={this.i18n.loading} />
                        {this.i18n.loading}
                    </div>
                }
                {
                    this.state.pageLoaded && this.state.gif &&
                    <div className="gifer-app">
                        <div className="gifer-title">
                            <img
                                src={this.props.sourceImageUrl}
                                alt={this.props.title}
                            />
                            <div>{this.i18n.by} <a href="/" target="_blank">progredemente</a></div>
                        </div>
                        {
                            this.state.imageProcessing &&
                            <div
                                className='gifer-processing'
                                style={{
                                    "--gif-side": `${this.side * this.scaleFactor}px`
                                }}
                            ></div>
                        }
                        {
                            !this.state.imageProcessing &&
                            <>
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
                            </>
                        }
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
