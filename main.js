import Teacher from './teacher.js'
import Course from './course.js'
import Lesson from './lesson.js'
import LearningPath from './learningPath.js'
import Student from './student.js'
import FreeStudent from './freeStudent.js'
import BasicStudent from './basicStudent.js'
import ExpertStudent from './expertStudent.js'
import Comment from './comment.js'
import TeacherStudent from './teacherStudent.js'


//* Teachers ---------------------
const FreddyVega = new Teacher({
  id: 1,
  name: 'Freddy Vega',
  speciality: 'Emprendimiento',
});
FreddyVega.teachClass(FreddyVega._name, FreddyVega._speciality)

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
  isFree: true
});
console.log(cursoProgramacionBasica);
//console.log(cursoProgramacionBasica.name = 'Curso Gratis')
//console.log(cursoProgramacionBasica.name = 'Curso Malito de Programación Básica') //* Da un error

const cursoIntroMarketingDigital = new Course({
  id: 2,
  name: 'Curso de Introducción al Marketing Digital',
  classes: [lesson1DM],
  teacher: ClauAlderete,
  lang: "English",
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
const miguel = new ExpertStudent({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  points: 40000,
  approvedCourses: [cursoProgramacionBasica],
  learningPaths: [escuelaDesarrolloWeb]
});
console.log(miguel);
console.log(miguel.publicarComentario("Me encantó el curso"))

const juan = new FreeStudent({
  id: 2,
  name: 'Juan',
  email: 'juan@gmail.com',
  username: 'juanDC',
  points:  100000,
})
console.log(juan)
juan.approveCourse(cursoProgramacionBasica)
juan.approveCourse(cursoIntroMarketingDigital)
console.log(juan.approvedCourses)

const daniel = new BasicStudent({
  id: 3,
  name: 'Daniel',
})
console.log(daniel)
daniel.approveCourse(cursoProgramacionBasica)
daniel.approveCourse(cursoIntroMarketingDigital)
console.log(daniel.approvedCourses)

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'freddy@gmail.com',
  instagram: "freddiervega"
})
console.log(freddy)
console.log(freddy.publicarComentario("Soy el profe y espero que le den 5 estrellas"))