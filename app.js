const express = require('express');
// require the express Module
// above returnsa funtion
const app = express();

//listening to the port 
app.listen(3000);

//route handler methods.. 
//app.get() app.post() app.patch() app.delete()


// http get request handler
// first arg-route(API) ; second arg- callbackn(req,res)
app.get('/', (req, res) => {
    console.log("Request is made to home.");
    res.sendFile('./views/index.html', { root: __dirname })
})
app.get('/about', (req, res) => {
    console.log("Request is made to about.");
    res.sendFile('./views/about.html', { root: __dirname })
})
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// middleWare used... 
// how Express works is ... it will go from top to bottom checking the route parameter..
//if it matches it will send the res...
// if it does not find any then this middleWare app.use() mthod is executed.
// SHOULD be used at last..becoz if it is in mid of router calls.. it will be called..
// to fire a middleware function
app.use((req, res) => {

    console.log("CAll to ERROR-404");
    // we have explicitly send the status code 404.. as it doesnt know.. 
    res.status(404).sendFile("./views/404.html", { root: __dirname });
    //  res.sendFile("./views/404.html", { root: __dirname })

    const data = {
        blahb: "blahblah"
    }
    // this sends raw json data.. which is used to send message.. in mern..maybe to console.
    // res.status(404).json(data)
})