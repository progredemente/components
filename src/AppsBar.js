import React, {Component} from 'react';
import './AppsBar.css';


class AppsBar extends Component{

  constructor(props) {
    super(props);
    let lang;
    try{
        lang = navigator.language.toLowerCase().split('-')[0];
    } catch(_){}
    if(!['en', 'es'].includes(lang)){
        lang = 'en';
    }
    this.apps = {
      "perroflautum": {
        img: "perroflautum.png",
        name: "Perro Flautum"
      },
      "strawman": {
        img: "strawman.png",
        name: lang === "es" ? "Hombre de paja" : "Straw man" 
      },
      "cable": {
        img: "cable.png",
        name: "Recoge cable"
      },
      "camaleon": {
        img: "camaleon.png",
        name: "Camaleón"
      },
      "calor": {
        img: "calor.png",
        name: "¡Calor!"
      },
      "buon-appetito": {
        img: "buon_appetito.png",
        name: "Buon Appetito"
      },
      "d-hondt": {
        img: "d_hondt.png",
        name: "d'Hondt tread on me"
      },
      "planchabragas": {
        img: "planchabragas.png",
        name: "Plancha Bragas"
      }
    }
  }
  render() {
    return (
      <div className='apps-bar-container'>
        <div className='apps-bar'>
          {
            Object.keys(this.apps).map((k) => {
              return (
                <a key={k} className={`apps-bar-app${this.props.current === k ? ' current' : ''}`} href={`/${k}`}>
                  <img src={`${process.env.RESOURCES_URL}/${this.apps[k].img}`}/>
                  <span>{this.apps[k].name}</span>
                </a>
              );
            })
          }
          {
            Object.keys(this.apps).map((k) => {
              return (
                <a key={k} className={`apps-bar-app${this.props.current === k ? ' current' : ''}`} href={`/${k}`}>
                  <img src={`${process.env.RESOURCES_URL}/${this.apps[k].img}`}/>
                  <span>{this.apps[k].name}</span>
                </a>
              );
            })
          }
          {
            Object.keys(this.apps).map((k) => {
              return (
                <a key={k} className={`apps-bar-app${this.props.current === k ? ' current' : ''}`} href={`/${k}`}>
                  <img src={`${process.env.RESOURCES_URL}/${this.apps[k].img}`}/>
                  <span>{this.apps[k].name}</span>
                </a>
              );
            })
          }
          {
            Object.keys(this.apps).map((k) => {
              return (
                <a key={k} className={`apps-bar-app${this.props.current === k ? ' current' : ''}`} href={`/${k}`}>
                  <img src={`${process.env.RESOURCES_URL}/${this.apps[k].img}`}/>
                  <span>{this.apps[k].name}</span>
                </a>
              );
            })
          }
        </div>
        <div className='apps-bar-page'>
          {this.props.children}
        </div>
      </div>
    )
  };
}

export default AppsBar;
