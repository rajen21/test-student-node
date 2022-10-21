module.exports = (app) => {
    var router = require('express').Router();
    const student = require('../controller/stud.controller');
    router.post('/', student.createStud);
    router.get('/', student.getAllStud);
    router.get('/:id', student.getOneStud);
    router.put('/:id', student.updateStud);
    app.use('/student', router);
};