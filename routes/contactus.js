exports.viewContact = function(req, res) {

  // controller code goes here
  var name = req.params.name;

  console.log("The project name is: " + name);
  res.render('contactus', {
    'projectName': name
  });

};