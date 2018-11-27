
// Initial declarations
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
//

// Model and Controllers info
const userModels = require('./api/user.model');
const users = require('./api/user.controllers');
//

// If not prod, use dotenv for variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
  }
//

// Declare app and DB location
const app = express();
const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_SERV}.mlab.com:${process.env.DB_PORT}/${process.env.DB}`;
//

// App use declarations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app'));
app.use(fileUpload());
//

// Routes
app.get('/api/users', users.findAll);
app.post('/api/users', users.add);
app.delete('/api/users/:id', users.delete);

// Universal Route
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
  });
//

// Port declaration
const PORT = process.env.PORT || 3000;
//

// Initialize MongoDB connection
mongoose.connect(mongoUri, { useNewUrlParser: true }, () => {
    app.listen(PORT);
    console.log(`Server running at http://localhost:${PORT}/`);
  });
//