const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// models
var models = require("./src/model");

// routes
var projectRouter = require('./src/router/ProjectRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/project',projectRouter)

models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

app.listen(3001, () => {
    console.log("Listening");
})