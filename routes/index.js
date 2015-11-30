

exports.partials = function(req, res){
  var filename = req.params.filename;
  console.log(req.params.filename);
  res.sendfile("public/partials/" + filename);
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};