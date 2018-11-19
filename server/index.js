const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.get('/api/profile_picture', (res) => {
//   res.sendFile('../public/static/me_cropped.jpg');
// })

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/resume', (req,res) => {
  res.sendFile(__dirname + '/static/kyle-ip-resume.pdf');
})

// app.get('/funstuff', (req,res) => {
//   res.sendFile(__dirname + '/static/funstuff.html');
// })

// app.get('/about', (req,res) => {
//   res.sendFile(__dirname + '/static/about.html');
// })

// app.get('/projects', (req,res) => {
//   res.sendFile(__dirname + '/static/projects.html');
// })

app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));
