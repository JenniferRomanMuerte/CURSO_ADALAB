'use strict';

// 1. La media de la carrera

const times = [56, 9, 45, 28, 35];

const result = times.reduce((acc, time) => {
  return (acc + time) / times.length;
});
console.log('La media de los tiempos es: ' + result);



// 2. El ganador de la carrera

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const winner = runners.reduce((acc, runner) =>{
  if (runner.time < acc.time) {
    return runner; // el actual pasa a ser el más rápido
  } else {
    return acc; // mantenemos al que ya teníamos
  }
});

console.log('El corredor más rápido es: ', winner);


// 3. El ganador de los estudiantes

const runnersStudent = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const runnersStudentWinner = runnersStudent
  .filter((runnerStudent) => {
    if(runnerStudent.student){
      return runnerStudent;
    }
  })
  .reduce((acc, runnerStudent) => {
    if (runnerStudent.time < acc.time) {
    return runnerStudent; // el actual pasa a ser el más rápido
  } else {
    return acc; // mantenemos al que ya teníamos
  }
  });

console.log('El ganador de los estudiantes es: ', runnersStudentWinner);
