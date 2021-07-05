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