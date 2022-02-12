exports.homeRoutes = (req,res)=>{
  res.render('index');
}

exports.user = (req,res) =>{
  res.render('user');
}

exports.hospital = (req,res) =>{
  res.render('hospital');
}

exports.new_user = (req,res) =>{
  res.render('new_user');
}
