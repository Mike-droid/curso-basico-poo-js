export default class Course {
  constructor({
    id,
    name,
    classes = [],
    teacher,
  }){
    this._id = id; //* convención para atributo privado
    this._name = name; //* convención para atributo privado
    this._classes = classes; //* convención para atributo privado
    this._teacher = teacher; //* convención para atributo privado
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

  set teeacher (newTeacher) {
    this._teacher = newTeacher;
  }
};