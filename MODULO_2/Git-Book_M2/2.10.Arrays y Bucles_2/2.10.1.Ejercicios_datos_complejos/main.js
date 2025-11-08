!"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

// 1 Pintar en pantalla los nombres de las promos
// 2 Pintar en pantalla las letras de las promos y los nombres de las promos
// 3 Pintar en pantalla las letras de las promos, los nombres de las promos y el número de alumnas
// 4 Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas
// 5 Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas
// 6 Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas que tenga edad par
// 7 Pintar en pantalla los nombres de las promos y los nombres la edad y el id de las alumnas que trabajan en Google
// 8 Pintar en pantalla los nombres de las promos y los nombres, la edad, el id de las alumnas y pintar el id de la alumna en consola cuando se haga click en una de ellas


const divElement = document.querySelector(".js-result");


const addinglist = (promo) => {
  const studentData = addingStudents(promo.students);
  const studentsPar = isPar(promo.students);
  const studentsGoogle = isGoogle(promo.students);
  divElement.innerHTML += `<ul>
    <li>
    <p>Nombre: ${promo.name}</p>
    <p>Promo: ${promo.promo}</p>
    <p>Número de alumnas: ${promo.students.length}</p>
    <ul>
    ${studentData}
    </ul>
    <ul>
    <p>Alumnas con edad par:</p>
    ${studentsPar}
    </ul>
    <ul>
    <p>Alumnas que trabajan en google:</p>
    ${studentsGoogle}
    </ul>
    </li>
  </ul>`;


};


const addingStudents = (students) => {
  let studentData = '';

  for (let student of students) {
    const nameStudent = student.name;
    const ageStudent = student.age;
    const idStudent = student.id;

    studentData += `
      <li id ="${idStudent}">${nameStudent}, ${ageStudent} </li>
    `;
  }
  return studentData;
};


const isPar = (students)=>{
  let studentsPar = '';
  for(const studentData of students){
    if((studentData.age%2)===0){
      studentsPar += `
       <li id ="${studentData.id}">${studentData.name}, ${studentData.age} </li>
      `;
  }
  }
 return studentsPar;
}


const isGoogle = (students) =>{

  let studentsGoogle = '';
   for(const studentData of students){
    if(studentsWorkingInGoogle.includes(studentData.id)){
      studentsGoogle += `
       <li id ="${studentData.id}">${studentData.name}, ${studentData.age} </li>
      `
    }
   }
   return studentsGoogle;
}


for (let i = 0; i < promos.length; i++) {
  let promo = promos[i];
  addinglist(promo);
}

const liElements = document.querySelectorAll("li");

for(const liElement of liElements){
  liElement.addEventListener('click', (ev) => {
    console.log(`El id de la alumna es: ${liElement.id}` )
});
}
