
const express = require('express');

const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');

const app = express();


app.use('/admin',adminRouter);
app.use('/public',publicRouter);

app.get('/',(req,res)=>{

    res.send('index');
})


app.get('/error',(req,res)=>
{
    res.send(a);
})

app.use((req,res,next)=>
{
    next('Requested url is not found!!!');


   //res.status(404).send('Requested url not found');

})

app.use((err,req,res,next)=>
{
    if(res.headerSent)
    {
        next('there was a problem!');
    }

    else {
     if(err.message) res.status(500).send(err.message)


     else
    res.status(500).send('There was a server site error')

    }
})


app.listen(3000,()=>
{
    console.log('Listen 3000')
});