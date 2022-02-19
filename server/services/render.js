const axios = require('axios');

exports.homeRoutes = (req, res) => {
  res.render('index');
}

exports.user = (req, res) => {
  res.render('user');
}

exports.hospital = (req, res) => {
  res.render('hospital');
}

exports.patient = (req, res) => {
  res.render('patient');
}

exports.new_user = (req, res) => {
  // res.render('new_user');

  //make a get request
  axios.get('http://localhost:3000/api/users')
    .then(function (response) {
      console.log(response)
      res.render('new_user', {
        users: response.data
      });
    })
    .catch(err => {
      res.send(err);
    })
}

exports.new_hospital = (req, res) => {
  // res.render('new_hospital');

  //make a get request
  axios.get('http://localhost:3000/api/hospitals')
    .then(function (response) {
      console.log(response)
      res.render('new_hospital', {
        hospitals: response.data
      });
    })
    .catch(err => {
      res.send(err);
    })
}

exports.new_patient = (req, res) => {
  // res.render('new_patient');

  //make a get request
  axios.get('http://localhost:3000/api/patients')
    .then(function (response) {
      console.log(response)
      res.render('new_patient', {
        patients: response.data
      });
    })
    .catch(err => {
      res.send(err);
    })
}

exports.donorspage = (req, res) => {
  // res.render('donorspage');
  //make a get request
  axios.get('http://localhost:3000/api/users')
    .then(function (response) {
      // console.log(response)
      res.render('donorspage', {
        donors: response.data
      });
    })
    .catch(err => {
      res.send(err);
    })
}

exports.donors = (req, res) => {
  // res.render('donors');

  axios.get('http://localhost:3000/api/users/', {params: {id:req.query.id}})
  .then(function (donordata) {
    console.log(donordata)
    res.render('donors', {
      donorsdata: donordata.data
    });
  })
  .catch(err => {
    res.send(err);
  })
}
