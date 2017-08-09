const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();

app.use(parser.urlencoded( {extended: true} ))
   .use(parser.json())
   .use(express.static(path.join(__dirname, '../static')));



app.listen(3000, err => {
    if(err) {
        console.log('Error while starting server', err);
    } else {
        console.log('Successfully started server at port 3000');
    }

});