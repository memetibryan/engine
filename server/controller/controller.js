var Userdb = require('../model/model')

//create and save new user
exports.create=(req,res)=>{
  if(!req.body){
    res.status(404).send({message: "Cannot Submit Empty Content"});
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
   .then(data=>{
     res.send(data)
     // res.redirect('/user')
   })
   .catch(err=>{
     res.status(500).send({
       message: err.message || "Some error occured while creating new user"
     });
   });
}

//retrieve and return all users
exports.find=(req,res)=>{
  Userdb.find()
   .then(user=>{
     res.send(user)
     // res.redirect('/user')
   })
   .catch(err=>{
     res.status(500).send({
       message: err.message || "Some error occured while retrieving the information!"
     });
   });
}
