var express =require('express');
var { json } =require('express');
var morgan =require('morgan');

//Importamos las rutas
var productRoutes = require('./routes/product');

var app = express();

//middleware

app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/product',productRoutes);

module.exports=app;