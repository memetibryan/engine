var Hospitaldb = require('../model/hospital')

//create and save new hospital
exports.create=(req,res)=>{
  if(!req.body){
    res.status(404).send({message: "Cannot Submit Empty Content"});
    return;
  }
  //new hospital
  const hospital = new Hospitaldb({
    name: req.body.fname,
    location: req.body.flocation,
    date: req.body.fdate,
    telephone: req.body.ftelephone
  })

  //save hospital
  hospital
   .save(hospital)
   .then(data=>{
     // res.send(data)
     res.redirect('/new_hospital')
   })
   .catch(err=>{
     res.status(500).send({
       message: err.message || "Some error occured while creating new hospitalr"
     });
   });
}

//retrieve and return all hospitals
exports.find=(req,res)=>{
  Hospitaldb.find()
   .then(hospital=>{
     res.send(hospital)
     // res.redirect('/hospital')
   })
   .catch(err=>{
     res.status(500).send({
       message: err.message || "Some error occured while retrieving the information!"
     });
   });
}
