
const express = require("express");

const mongoose = require("mongoose");

const todoHandler = require('./routeHandler/todoHandler')

const app = express();


app.use(express.json());


mongoose.connect('mongodb://localhost/todos', { useUnifiedTopology: true,useNewUrlParser: true })
.then(()=>
console.log('connection successfull'))
.catch(err=>console.log(err))

app.use('/todo',todoHandler);


const errorHandling=(err,req,res,next)=>
{
    if(res.headersSent)
    return next(err);

    res.status(500).json({error : err});

}


app.get('/', function(req, res){
    res.send('welcome to express');
});
app.listen(3000,()=>
{
    console.log('Listen 3000')
});