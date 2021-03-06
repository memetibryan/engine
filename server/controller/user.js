var Userdb = require('../model/user')

//create and save new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(404).send({
      message: "Cannot Submit Empty Content"
    });
    return;
  }
  //new user
  const user = new Userdb({
    name: req.body.name,
    type: req.body.type,
    location: req.body.location,
    telephone: req.body.telephone
  })

  //save user
  user
    .save(user)
    .then(data => {
      // res.send(data)
      res.redirect('/new_user')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating new user"
      });
    });
}

//retrieve and return all users
exports.find = (req, res) => {

  //retrieve single users based on location
  if(req.query.id){

    const id = req.query.id

    Userdb.findById(id)
      .then(data => {
        if(!data){
          res.status(404).send({message: "No Record of a Donor from" + id})
        }else{
          res.send(data)
        }
      })
      .catch(err => {
        res.status(500).send({message: "Error fetching Donors from" + id})
      })

  }else{
    //retrieve all users in the database
    Userdb.find()
      .then(user => {
        res.send(user)
        // res.redirect('/user')
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occured while retrieving the information!"
        });
      });
  }
}
