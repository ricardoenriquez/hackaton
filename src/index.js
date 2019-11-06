var app = require('./app');
require('@babel/polyfill');

async function main(){
    await app.listen(3000);
    console.log('Servidor creado por el puerto 3000');
}

main();