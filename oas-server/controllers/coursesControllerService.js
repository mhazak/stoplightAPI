'use strict'
let courses = [
  { id: 1, name: "English", description: "English language."},
  { id: 2, name: "Java programming", description: "Java basics."},
  { id: 3, name: "Bussines", description: "Introduction into bussines basics."},
  { id: 4, name: "Python", description: "Python basics."},
  { id: 5, name: "JavaScript", description: "Javascript basics."}
]

module.exports.findCourses = function findCourses(req, res, next) {
  res.json(courses)
};

module.exports.createCourses = function createCourses(req, res, next) {
  res.send({
    message: 'This is the mockup controller for createCourses'
  });
};

module.exports.courses = courses;