
const express = require('express');

const app = express();

//const handler = require('./handler');

//app.use(express.json());

const adminRouter = express.Router();




app.use('/admin',adminRouter);

const logger = (req,res,next)=>
{
    console.log(`${new Date(Date.now()).toLocaleDateString()} - ${req.method} - ${req.protocol}`)
    next();

}

adminRouter.use(logger);


adminRouter.get('/dashboard',(req,res)=>
{
    res.send('DashBoard');
})

app.get('/',(req,res)=>
{
    res.send('ABOUT');
})

app.post('/hello',(req,res)=>
{
    res.send('ok');
})

/*const adminRoute = express.Router();

adminRoute.get('/dashboard',(req,res)=>
{
    console.log(req.originalUrl);
    console.log(req.url);


    res.send('we are in admin dashboard');

})

app.use('/admin',adminRoute);


/*app.get('/',(req,res)=>
{
    console.log(req.originalUrl)
    console.log(req.url);
    res.send('Hello world')
})

app.get('/',handler)

app.get('/resTest',(req,res)=>
{
    res.sendStatus(404);
})

app.post('/',(req,res)=>
{
    console.log(req.body);
    res.send('hello');
})*/

app.listen(3000,()=>
{
    console.log('Listen 3000')
});