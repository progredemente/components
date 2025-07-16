let lang;
try{
  lang = navigator.language.toLowerCase().split('-')[0];
} catch(_){}
if(!['en', 'es', 'pt'].includes(lang)){
  lang = 'en';
}

const appList = {
  "perroflautum": {
    img: "perroflautum.png",
    name: "Perro Flautum",
    type: "other"
  },
  "strawman": {
    img: "strawman.png",
    name: lang === "es" ? "Hombre de paja" : "Straw man",
    type: "image"
  },
  "cable": {
    img: "cable.png",
    name: "Recoge Cable",
    type: "gif"
  },
  "camaleon": {
    img: "camaleon.png",
    name: "Camaleón",
    type: "gif"
  },
  "chromatic": {
    img: "calor.png",
    name: lang === "es" ? "Cambio cromático" : lang === "pt" ? "Mudança cromática" : "Chromatic change",
    type: "other"
  },
  "buon-appetito": {
    img: "buon_appetito.png",
    name: "Buon Appetito",
    type: "gif"
  },
  "d-hondt": {
    img: "d_hondt.png",
    name: "d'Hondt tread on me",
    type: "other"
  },
  "planchabragas": {
    img: "planchabragas.png",
    name: "Plancha Bragas",
    type: "gif"
  },
  "esquizobanderas": {
    img: "esquizobanderas.png",
    name: "Esquizobanderas",
    type: "image"
  },
  "coptcha": {
    img: "coptcha.png",
    name: "COPTCHA",
    type: "other"
  }
}

export default appList;