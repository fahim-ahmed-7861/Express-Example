const handler = (req,res)=>
{
    console.log(req.accepts('html'))
    res.send('sub code');
}

module.exports = handler;