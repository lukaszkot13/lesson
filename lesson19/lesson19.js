const { listaAllegro, students, rentalCarCompany } = require("./data");

/*
{
    rate1:0,
    rate2:3,
    rate3:3,
    rate4:4,
    rate5:2,
    rate6:0
}
*/

// const student = function (prev, next) {

const grades = students.reduce(
  function (grades, student) {
    student.grades.forEach(function ({ rate }) {
      const key = `rate${rate}`;
      grades[key]++;
    });
    return grades;
  },
  {
    rate1: 0,
    rate2: 0,
    rate3: 0,
    rate4: 0,
    rate5: 0,
    rate6: 0,
  }
);

console.log(grades);
