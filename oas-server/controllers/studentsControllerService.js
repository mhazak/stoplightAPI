'use strict'

module.exports.findStudents = function findStudents(req, res, next) {
  res.send({
    message: 'This is the mockup controller for findStudents'
  });
};

module.exports.createStudents = function createStudents(req, res, next) {
  res.send({
    message: 'This is the mockup controller for createStudents'
  });
};