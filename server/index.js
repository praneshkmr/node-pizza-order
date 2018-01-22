"use strict";
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import routes from './routes/index';

//using let
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

// using arrow syntax
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        console.log(err);
        res.status(err.status || 500);
        res.send(err);
    });
}

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.send(err);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

import Mongoose from 'mongoose';
import customerModel from './models/customer';
import pizzaModel from './models/pizza';

Mongoose.connect('mongodb://localhost/node-pizza-order', function(err){
    if(err){
        console.log("Error Connnecting to MongoDB");
    }
    else{
        console.log("Successfully Connected to MongoDB");
    }
})

module.exports = app;