var express =require('express');
var { json } =require('express');
var morgan =require('morgan');

//Importamos las rutas
var productRoutes = require('./routes/product');
var userRoutes = require('./routes/user');
var eventoRoutes = require('./routes/evento');
var eventoUserRoutes = require('./routes/eventoUser');

var app = express();

//middleware

app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/product',productRoutes);
app.use('/api/user',userRoutes);
app.use('/api/evento',eventoRoutes);
app.use('/api/eventoUser',eventoUserRoutes);

module.exports=app;