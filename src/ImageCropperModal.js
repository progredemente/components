import React, { Component, createRef } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './ImageCropperModal.css';

class ImageCropperModal extends Component{

  constructor(props){
      super(props);
      this.state = {
          showModal: false
      }
      this.cropperRef = createRef();
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    let crop = new Image();
    crop.src = this.cropperRef.current.cropper.getCroppedCanvas().toDataURL();
    crop.onload = () => {
        this.props.setCrop(crop);
        this.setState({showModal: false});
    }
  }
  
  render() {
    return (
      <div
        className={`image-cropper-modal${this.state.showModal ? "": " hidden"}`}
        onClick={this.hideModal}
        onMouseUp={() => {
          return false;
        }}
      >
        <div
          className="image-cropper-modal-container"
          onClick={(evt) => {
              evt.stopPropagation();
          }}
        >
          <div className="image-cropper-modal-title">Recortar imagen</div>
          <Cropper
            src={this.props.image.src}
            aspectRatio={1}
            style={{height: Math.min(500, window.innerWidth - 40), width: Math.min(500, window.innerWidth - 40)}}
            zoomable={false}
            ref={this.cropperRef}
          />
          <div
            className="prg-button"
            onClick={this.hideModal}
          >
            Aceptar
          </div>
        </div>
      </div>
    )
  };
}

export default ImageCropperModal;
