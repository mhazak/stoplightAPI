'use strict'
const sub = require("./coursesControllerService");

module.exports.funccoursescoursesIdPARAMETERS = function funccoursescoursesIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursescoursesIdPARAMETERS'
  });
};

module.exports.getCourses = function getCourses(req, res, next) {
  const coursesById = sub.courses.findIndex(x => x.id == req.courseId.value);
  
  if (coursesById >= 0) {
    res.json(sub.courses[coursesById]);
  } else {
   
    res.send("Course was not found.");
  }
};

module.exports.updateCourses = function updateCourses(req, res, next) {
  const updateCoursesById = sub.courses.findIndex(x => x.id == req.coursesId.value);
  
  if (updateCoursesById >= 0) {
    sub.courses[updateCoursesById].id = parseInt(req.coursesId.value),
    sub.courses[updateCoursesById].name = req.undefined.value.name;
    sub.courses[updateCoursesById].description = req.undefined.value.description;
    res.send("Course was updated!");

  } else {
    res.send("Course was not founded.");
  }
};

module.exports.deleteCourses = function deleteCourses(req, res, next) {
  const deleteId = sub.courses.findIndex(x => x.id == req.coursesId.value);

  if (deleteId >= 0) {
    sub.courses.splice(deleteId, 1);
    res.send('Course was deleted!');
  
  } else {
    res.send('Course was not found.');
  }
};