export default class Lesson {
  constructor({
    id,
    title,
  }){
    this._id = id;
    this._title = title;
  };

  get id() {
    return this._id;
  }

  set id (newID) {
    this._id = newID;
  }

  get title() {
    return this._title;
  }

  set title (newTitle) {
    this._title = newTitle;
  }

  reproducir() {
    videoPlay(this.id)
  }

  pausar() {
    videoStop(this.id)
  }

};

function videoPlay(id){
  const urlSecreta = `https://platzi-secreto.com/${id}`
  console.log(`Se está produciendo desde la url ${urlSecreta}`)
}

function videoStop(id){
  const urlSecreta = `https://platzi-secreto.com/${id}`
  console.log(`Pausamos la url ${urlSecreta}`)
}
