const http = require("http");
const fs = require('fs');
//      request and response 
// this is how you create a server ..pass req and res 
// req contains info about https requests(get,post..)
// res is how you send the response 

// callback function is called after the request is made.. i.e. after sending the requests.
// this cannot be done without listening to server...
const server = http.createServer((req, res) => {
    console.log("request is made");


    // returning htmml pages
    res.setHeader("Content-Type", 'text/html')

    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })





    // i know i m close.. putah!

    // tried using streams.. 
    // const readStream = fs.createReadStream('./views/index.html');
    // // readStream.on('data', (chunk) => {
    // //     res.write(chunk);
    // // })
    // const writeStream = fs.createWriteStream(res)

    // maybe piping would have made this happen..
    // readStream.pipe(writeStream);
    // this is not working becoz..res.write needs a chunk as a arguement
    // illegal arg error.. lets try Streams way as it creates chunks
    // const readFile = fs.readFile('./views/index.html', () => {
    //     console.log("html file is read");
    // })
    //  res.write(readFile);
    // ~~~~~~~~~~~~~trial to return html pages~~~~~~~~~~



    // this is how you write html tags to response object
    // res.write("<bold>HAHAH</bold>")
    // res.write('<h1>blahahhahhahahha</h1>')
    // res.end();
});


// listening to server.. crucial for setupping server 
// for this example, we have used localhost:3000

//listen(portNos,"domainName",()=>{})
//callback function called after server starts i.e. start listening
server.listen(3000, "localhost", () => {
    console.log("server is listening for requests on port 3000");
});
