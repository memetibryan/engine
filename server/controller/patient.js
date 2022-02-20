var Patientdb = require('../model/patient')
var Userdb = require('../model/user')

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
  if(req.query.id){

    const location = req.query.id

    Userdb.findById(location)
      .then(data => {
        if(!data){
          res.status(404).send({message: "No Record of a Donor from" + location})
        }else if (data.location = "voi"){
          res.send(data)
        }
      })
      .catch(err => {
        res.status(500).send({message: "Error fetching Donors from" + location})
      })

  }else{
    //retrieve all users in the database
    Patientdb.find()
      .then(patient => {
        res.send(patient)
        // res.redirect('/user')
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occured while retrieving the information!"
        });
      });
  }
}
