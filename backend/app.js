const express = require('express')
const Routes = require('./routes/auth')

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api', Routes);


module.exports = app;