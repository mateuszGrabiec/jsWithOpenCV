const http = require('http');
const fs = require('fs')
const express = require('express');

const app=express();
const clientPath=`${__dirname}/client`;
app.use(express.static(clientPath));
const server=http.createServer(app); 

app.get('/index', function(req, res) {  //
});
app.get('/cup.mp4', function(req, res) {  //
});

const port = process.env.PORT || 3000;

server.listen(port,()=>{
    console.log('Server listening on '+port);
})
