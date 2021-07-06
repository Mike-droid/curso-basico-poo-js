# Curso de POO en JS

## JavaScript orientado a objetos

### JavaScript: orientado a objetos, basado en prototipos

Casi todo en JS es un objeto.

JS es un lenguaje orientado a objetos, basado en prototipos.

Nuevos elementos -> Objetos -> prototipos

Todos nuestros objetos están construidos con prototipos.

### ¿Qué es la programación orientada a objetos?

#### Paradigmas

Los paradigmas son distintas maneras de programar, los más comunes son:

- Estructurado
- Orientado a objetos
- Funcional

Un paradigma **NO** es mejor que otro, depende de la situación y el contexto.

Cada lenguaje puede trabajar con 1 o varios paradigmas.

Ventajas de POO ✅:

- Orden
- Todo está conectado
- Reutilizar código -> Los moldes son las clases, que usaremos para instanciar objetos

Los objetos tienen **métodos** (funciones) y **atributos** (características).

## Objetos, clases y prototipos

### Qué es un objeto en JS

Arrays en JS

```javascript
const students_platzirank = [
  'Juan',
  'Juanita',
  'Nath',
  'Nora',
  'Luisa'
];
```

Array asociativo en PHP

```php
$students_platzirank = [
  'Juan' => 100,
  'Juanita' => 300,
  'Nath' => 700,
  'Nora' => 150,
  'Luisa' => 0
];
```

Diccionarios en Python

```python
students_platzirank = {
  'Juan': 100,
  'Juanita': 300,
  'Nath': 700,
  'Nora': 150,
  'Luisa': 0
}
```

Objetos literales en JS

```javascript
const students_platzirank = {
  'Juan': 100,
  'Juanita': 300,
  'Nath': 700,
  'Nora': 150,
  'Luisa': 0
};
```

`objetos_literales !== instancias` Peeeeero sí son instancias del prototipo Object de JS 😅

Clases y objetos en PHP

```php
class Student {
  public $name = 'Nombre';
  public $age = 18;
  public $points = 750;
}

$juanita = new Student;
```

Clases y objetos en Python

```python
class Student:
  name = 'Nombre'
  age = 18
  points = 750

juanita = Student()
```

Clases y objetos en JavaScript

```javascript
function Student(){
  this.name = 'Nombre'
  this.age = 18
  this.points = 750
}

const juanita = new Student()
juanita.hasOwnProperty("name") //true
```

```javascript
const objetito = {}
objetito.hasOwnProperty("name") // false
```

[Documentación oficial MDN sobre objetos en JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)

### Objetos literales y prototipos en JS

```javascript
//* Objeto literal
const ximena = {
  name: 'Ximena',
  age: 21,
  hermosa: true,
  cursosAprobados: [
    "Curso de introducción al Marketing Digital",
    "Curso de Community Manager"
  ],
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};


//* Prototipo
function Student(name, age, cursosAprobados) {
  this.name = name
  this.age = age
  this.cursosAprobados = cursosAprobados
};

//* Nueva manera de escribir funciones
Student.prototype.aprobarCurso = function(nuevoCursito){
  this.cursosAprobados.push(nuevoCursito)
};

const miguel = new Student(
  "Miguel Ángel",
  22,
  ['Básico de React', 'Profesional de JS']
);

```

### Clases en JavaScript

Son una sintaxis diferente para trabajar con prototipos en JS.

```javascript
//* Prototipos con sintaxis de clases

class Alumno {
  constructor({
    name,
    age,
    cursosAprobados = [], //* Por defecto el parámetro tiene un valor vacío
    email,
  }) {
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
    this.email = email
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito)
  }
};

const patricia = new Alumno({
  name: 'Patricia',
  age: 21,
  cursosAprobados: ['Cocina'],
  email: 'patricia@gmail.com'
});

```

### Ventajas de la programación orientada a objetos

```javascript
class LearningPaths {
  constructor({
    id,
    title,
    courses,
    logo,
  }) {
    this.id = id;
    this.title = title;
    this.courses = courses;
    this.logo = logo;
    this.coursesQuantity = courses.length;
  }
}

const escuelaDesarrolloWeb = new LearningPaths({
  id: 1,
  title: 'Escuela de Desarrollo Web',
  courses: ['Curso Definitivo de HTML y CSS', 'Curso de Responsive Design', 'Curso de JS POO', 'Curso de Frameworks de JS', 'Curso de Node.js'],
  logo: 'Logo Web Dev',
});

const escuelaMarketingDigital = new LearningPaths({
  id: 2,
  title: 'Marketing Digital',
  courses: ['Curso de introducción al Marketing Digital', 'Curso de Excel Básico', 'Curso de SEO Técnico'],
  logo: 'Logo MD',
});

const escuelaHabilidadesBlandas = new LearningPaths({
  id: 3,
  title: 'Habilidades Blandas',
  courses: ['Curso de inteligencia emocional', 'Herramientas para el crecimiento personal'],
  logo: 'Rojito bonito',
});

const escuelaFinanzas = new LearningPaths({
  id: 4,
  title: 'Finanzas e Inversiones',
  courses: ['Curso de Introducción a la Educación Financiera', 'Curso de Finanzas Personales', 'Curso de Planeación Financiera'],
  logo: 'Dorado',
});

const escuelaIngles = new LearningPaths({
  id: 5,
  title: 'English Academy',
  courses: ['English 1', 'English 2', 'English 3'],
  logo: 'Red',
});

class Student {
  constructor({
    id,
    name,
    email,
    username,
    points = 0,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.points = points;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  }
}

const miguel = new Student({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  twitter: '@miguelAngelRe28',
  learningPaths: [
    escuelaDesarrolloWeb,
    escuelaHabilidadesBlandas,
    escuelaFinanzas
  ]
});

const ximena = new Student({
  id: 2,
  name: 'Ximena',
  email: 'ximena@gmail.com',
  username: 'ximena',
  learningPaths: [
    escuelaMarketingDigital,
    escuelaFinanzas,
    escuelaHabilidadesBlandas,
    escuelaIngles
  ],
});
```

## Pilares de  la POO: abstracción y encapsulamiento

### Qué es abstracción

Podemos ver a la abstracción como una generalización de los objetos del mundo real.

### Abstracción en JS

main.js:

```javascript
import Teacher from './teacher.js'
import Course from './course.js'
import Lesson from './lesson.js'
import LearningPath from './learningPath.js'
import Student from './student.js'


//* Teachers ---------------------
const FreddyVega = new Teacher({
  id: 1,
  name: 'Freddy Vega',
  speciality: 'CEO',
});
console.log(FreddyVega);

const ClauAlderete = new Teacher({
  id: 2,
  name: 'Clau Alderete',
  speciality: 'Digital Marketing',
});
console.log(ClauAlderete);


//* Lecciones -----------------------
const lesson1PB = new Lesson({
  id: 1,
  title: 'Clase 1 Programación Básica',
});
console.log(lesson1PB);

const lesson1DM = new Lesson({
  id: 2,
  title: 'Clase 1 Marketing Digital',
});
console.log(lesson1DM);


//* Cursos ----------------------------
const cursoProgramacionBasica = new Course({
  id: 1,
  name: "Curso gratis de programación básica",
  classes: [lesson1PB],
  teacher: FreddyVega,
});
console.log(cursoProgramacionBasica);

const cursoIntroMarketingDigital = new Course({
  id: 2,
  name: 'Curso de Introducción al Marketing Digital',
  classes: [lesson1DM],
  teacher: ClauAlderete
});
console.log(cursoIntroMarketingDigital);


//* Escuelas ---------------------
const escuelaDesarrolloWeb = new LearningPath({
  id: 1,
  title: 'Escuela de Desarrollo Web',
  courses: [cursoProgramacionBasica],
});
console.log(escuelaDesarrolloWeb);

const escuelaMarketingDigital = new LearningPath({
  id: 2,
  title: 'Marketing Digital',
  courses: [cursoIntroMarketingDigital],
});
console.log(escuelaMarketingDigital);


//* Estudiantes ---------------------
const miguel = new Student({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  points: 40000,
  approvedCourses: [cursoProgramacionBasica],
  learningPaths: [escuelaDesarrolloWeb]
});
console.log(miguel);
```

---

Teacher.js:

```javascript
export default class Teacher {
  constructor({
    id,
    name,
    speciality,
  }) {
    this.id = id;
    this.name = name;
    this.speciality = speciality;
  }
};
```

---

Lecciones.js:

```javascript
export default class Lesson {
  constructor({
    id,
    title,
  }){
    this.id = id;
    this.title = title;
  };
};
```

---

course.js:

```javascript
export default class Course {
  constructor({
    id,
    name,
    classes = [],
    teacher,
  }){
    this.id = id;
    this.name = name;
    this.classes = classes;
    this.teacher = teacher;
  };
}
```

---

Learning Path:

```javascript
export default class LearningPath {
  constructor({
    id,
    title,
    courses = [],
  }) {
    this.id = id;
    this.title = title;
    this.courses = courses;
    this.coursesQuantity = courses.length;
  }
};
```

---

student.js:

```javascript
export default class Student {
  constructor({
    id,
    name,
    email,
    username,
    points = 0,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.points = points;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  }
};
```

### Qué es encapsulamiento

Se trata de proteger los datos.

- Esconder métodos y atributos -> Pero en realidad no podemos hacer esto en JS
- No permitir la alteración de métodos y atributos
- Getters y settes
- Namespaces
- Object.defineProperties
- Módulos de ES6

### Getters y Setters en JS

### Módulos con ECMAScript 6

teacher.js:

```javascript
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
```

main.js:

```javascript
const FreddyVega = new Teacher({
  id: 1,
  name: 'Freddy Vega',
  speciality: 'Emprendimiento',
});
FreddyVega.teachClass(FreddyVega._name, FreddyVega._speciality)
```

## Pilares de la POO: herencia y polimorfismo

### Qué es herencia

La herencia nos permite crear "clases madre", la cual servirá de molde para clases hijas, que compartirán sus métodos y atributos.
Usamos la palabra reservada `extends`.

### Herencia en JS

Para usar herencia en JS, basta con:

```javascript
import Student from './student.js'

export default class ExpertStudent extends Student {
  constructor(props) {
    super(props) //*Llama al constructor de la clase madre
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }
}
```

### Qué es polimorfismo

Es como la herencia 2.0. Permite cambiar e incluso anular los métodos y atributos de una super clase.

Tipos de polimorfismo:

- Sobrecarga
- Paramétrico
- Inclusión

### Polimorfismo en JS

student.js:

```javascript
import Comment from './comment.js'
publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name
    })
    comment.publicar()
  }
```

---
comment.js:

```javascript
export default class Comment {
  constructor({
    content,
    studentName,
    studentRole = "Estudiante",
  }){
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0
  }

  publicar() {
    console.log(`${this.studentName} ( ${this.studentRole} )`)
    console.log(`${this.likes} likes`)
    console.log(`${this.content}`)
  }
}
```

---
teacherStudent.js:

```javascript
import Student from './student.js'
import Comment from './comment.js'

export default class TeacherStudent extends Student {
  constructor(props) {
    super(props)
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Professor"
    })
    comment.publicar()
  }
}
```

---
main.js:

```javascript
const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'freddy@gmail.com',
  instagram: "freddiervega"
})
console.log(freddy)
console.log(freddy.publicarComentario("Soy el profe y espero que le den 5 estrellas"))
```
