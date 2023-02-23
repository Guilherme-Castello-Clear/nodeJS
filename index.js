const express = require('express'); //Include express lib
const consign = require('consign'); //Include consign lib

let app = express();

consign().include('routes').into(app);// Include routes folder in let app and send app send to module.exports

app.listen(3000, "127.0.0.1", ()=>{//Start server

    console.log("Server running!");

});