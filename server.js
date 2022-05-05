const express = require ("express");
const app = express();
const db= require("./db.js");
const path = require("path");
//const cors = require ('cors');
const jobsRoute = require("./controller/jobsRoute")
const usersRoute = require("./controller/usersRoute")

app.use(express.json())

app.use('/api/users/', usersRoute)
app.use('/api/jobs/', jobsRoute)
const port = process.env.PORT || 5000;


app.listen(port, ()=> console.log('Node JS Server Started'));