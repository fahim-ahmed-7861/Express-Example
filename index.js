
const express = require('express');

const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');

const app = express();


app.use('/admin',adminRouter);
app.use('/public',publicRouter);

app.get('/',(req,res)=>{

    res.send('index');
})


app.listen(3000,()=>
{
    console.log('Listen 3000')
});