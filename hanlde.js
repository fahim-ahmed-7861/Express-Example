
const handle = (req,res)=>
{
    console.log(req.body)
    console.log(req.app.locals.title);
    res.send('Hello');
}

module.exports = handle;