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
    name: req.body.name,
    type: req.body.type,
    location: req.body.location,
    telephone: req.body.telephone
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

//retrieve and return all patients
exports.find = (req, res) => {

    //retrieve all patients in the database
    patientdb.find()
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
