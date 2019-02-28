'use strict'

let grades=[
  {id: 1, studentid:1, courseid:1, grade:5},
  {id: 2, studentid:1, courseid:2, grade:5},
  {id: 3, studentid:1, courseid:3, grade:5},
  {id: 4, studentid:1, courseid:4, grade:5},
  {id: 5, studentid:1, courseid:5, grade:5},
  {id: 6, studentid:2, courseid:1, grade:5},
  {id: 7, studentid:2, courseid:2, grade:5},
  {id: 8, studentid:2, courseid:3, grade:5},
  {id: 9, studentid:2, courseid:4, grade:5},
  {id: 10, studentid:2, courseid:5, grade:5},
  {id: 11, studentid:3, courseid:1, grade:5},
  {id: 12, studentid:3, courseid:2, grade:5},
  {id: 13, studentid:3, courseid:3, grade:5},
  {id: 14, studentid:3, courseid:4, grade:5},
  {id: 15, studentid:3, courseid:5, grade:5},
  {id: 16, studentid:4, courseid:1, grade:5},
  {id: 17, studentid:4, courseid:2, grade:5},
  {id: 18, studentid:4, courseid:3, grade:5},
  {id: 19, studentid:4, courseid:4, grade:5},
  {id: 20, studentid:4, courseid:5, grade:5},
  {id: 21, studentid:5, courseid:1, grade:5},
  {id: 22, studentid:5, courseid:2, grade:5},
  {id: 23, studentid:5, courseid:3, grade:5},
  {id: 24, studentid:5, courseid:4, grade:5},
  {id: 25, studentid:5, courseid:5, grade:5}
]



module.exports.findGrades = function findGrades(req, res, next) {
  res.json(grades);
};

module.exports.createGrades = function createGrades(req, res, next) {
  const newGrade= {
    id: grades.length+1,
    studentid: req.undefined.value.studentid,
    courseid: req.undefined.value.courseid,
    grade: req.undefined.value.grade, 
}

console.log(newGrade);

grades.push(newGrade);
res.send('OK');

};

module.export.grades = grades;