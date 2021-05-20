

const express = require("express");

const adminRouter = express.Router();

adminRouter.get('/',(req,res)=>
{
    res.send('Home Admin');
})

adminRouter.get('/about',(req,res)=>{
    res.send('About Admin');
})

module.exports = adminRouter;