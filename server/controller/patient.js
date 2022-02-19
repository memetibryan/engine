var Patientdb = require('../model/patient')

//create and save new patient
exports.create = (req, res) => {
  if (!req.body) {
    res.status(404).send({
      message: "Cannot Submit Empty Content"
    });
    return;
  }

  //new patient
  const patient = new Patientdb({
    name: req.body.yname,
    type: req.body.ytype,
    location: req.body.ylocation,
    telephone: req.body.ytelephone
  })

  //save patient
  patient
    .save(patient)
    .then(data => {
      // res.send(data)
      res.redirect('/new_patient')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating new patient"
      });
    });
}

exports.find = (req, res) => {
  Patientdb.find()
    .then(patient => {
      res.send(patient)
      // res.redirect('/patient')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving the information!"
      });
    });
}
