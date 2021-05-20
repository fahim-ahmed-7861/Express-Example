

const express = require("express");

const publicRouter = express.Router();


const log=(req,res,next)=>
{
    console.log('I am logging something');

    next();


}
publicRouter.all('*',log);

publicRouter.get('/',(req,res)=>
{
    res.send('public Admin');
})

publicRouter.param('user',(req,res,next,id)=>
{
    req.user = id === '1' ? 'Admin' : 'Anonymous';

    next();


})

publicRouter.get('/:user',(req,res)=>
{
    res.send(`Hello ${req.user}`)
})

publicRouter.get('/about',(req,res)=>{
    res.send('About Admin');
})

module.exports = publicRouter;