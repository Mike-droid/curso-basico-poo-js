export default class Course {
  constructor({
    id,
    name,
    classes = [],
    teacher,
    isFree = false,
    lang = "spanish",
  }){
    this._id = id; //* convención para atributo privado
    this._name = name; //* convención para atributo privado
    this._classes = classes; //* convención para atributo privado
    this._teacher = teacher; //* convención para atributo privado
    this._isFree = isFree;
    this._lang = lang;
  };

  get id () {
    return this._id;
  }

  set id (newID) {
    this._id = newID;
  }

  get name () {
    return this._name;
  }

  set name (newName) {
    if (newName === 'Curso Malito de Programación Básica') {
    console.error('¿Te crees muy gracioso?')
    } else {
      this._name = newName;
    }
  }

  get classes () {
    return this._classes;
  }

  set classes (newClasses) {
    this._classes = newClasses;
  }

  get teacher () {
    return this._teacher;
  }

  set teacher (newTeacher) {
    this._teacher = newTeacher;
  }

  get isFree () {
    return this._isFree;
  }

  set isFree (newValue) {
    this._isFree = newValue;
  }

  get lang() {
    return this._lang;
  }

  set lang(newLanguage) {
    this._lang = newLanguage;
  }

};