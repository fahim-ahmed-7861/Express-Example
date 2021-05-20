

const express = require("express");

const adminRouter = express.Router();

adminRouter
     .route('/:id')
     .all((req,res,next)=>
     {
         req.id = req.params.id;

         req.name = 'SHOJIB'

         next();
       
     })
     .get((req,res)=>
     {
        res.send(`${req.method} ${req.id}`);
     })
     .put((req,res)=>
     {
        res.send(`${req.method} ${req.id}`);
     })
     .post((req,res)=>
     {
        res.send(`${req.method} ${req.id}`);
     })
     .delete((req,res)=>
     {
        res.send(`${req.method} ${req.id} ${req.name}`);
     })

     

adminRouter.get('/',(req,res)=>
{
    res.send('Home Admin');
})

adminRouter.get('/about',(req,res)=>{
    res.send('About Admin');
})

module.exports = adminRouter;