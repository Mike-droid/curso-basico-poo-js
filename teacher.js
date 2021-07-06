export default class Teacher {
  constructor({
    id,
    name,
    speciality,
  }) {
    this._id = id;
    this._name = name;
    this._speciality = speciality;
  }

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
    this._name = newName;
  }

  get speciality () {
    return this._speciality;
  }

  set speciality (newSpeciality) {
    this._speciality = newSpeciality;
  }

  teachClass() {
    teach(this._name, this._speciality)
  }
};

function teach(teacherName, teacherSpeciality){
  console.log(`Soy ${teacherName} y estoy enseñando ${teacherSpeciality}`)
}