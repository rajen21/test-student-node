const db = require('../models');
const Student = db.student;

exports.createStud = async (req, res) => {
    const tempStud = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        marks: req.body.marks,
        result: req.body.result,
    };

    const student = new Student(tempStud);

    student.save()
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send(err.message || 'some error occured');
    })
};

exports.getAllStud = async (req, res) => {
    Student.find(req.query)
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send(err.message || 'some error occured');
    })
};

exports.getOneStud = async (req, res) => {
    const id = req.params.id;
    Student.findById(id)
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send(err.message || 'some error occured');
    })
};

exports.updateStud = async (req, res) => {
    const id = req.params.id;
    Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send(err.message || 'Error updating user with id ' + id);
        });
}
