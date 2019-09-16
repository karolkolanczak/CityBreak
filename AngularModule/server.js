//Install express server
const express = require('express');
const path = require('path');
// const cors = require('cors')
const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'

app.use(express.static(__dirname + '/dist/AngularModule'));

// app.use(cors({
//   origin: 'http://localhost:8080'
// }));
//
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Origin', req.header('origin'));
  next();
});

app.get('/*all', function(req,res) {

  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/AngularModule/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);





