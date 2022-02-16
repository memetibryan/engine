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

exports.donor = (req, res) => {
  res.render('donor');
}

exports.new_user = (req, res) => {
  // res.render('new_user');

  //mage a get request
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

  //mage a get request
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
