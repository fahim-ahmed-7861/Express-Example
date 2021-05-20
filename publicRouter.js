

const express = require("express");

const publicRouter = express.Router();

publicRouter.get('/',(req,res)=>
{
    res.send('public Admin');
})

publicRouter.get('/about',(req,res)=>{
    res.send('About Admin');
})

module.exports = publicRouter;