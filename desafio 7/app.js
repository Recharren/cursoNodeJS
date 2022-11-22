const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const { METHODS } = require('http');

app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
  }))


app.use(morgan(':method :url'))

app.get('/',(req,res)=>{
    res.send('Hola mundo');
})

app.get('/about',(req,res)=>{
    res.send('hola about');
})

app.post('/guardar',(req,res)=>{
    res.send('Guardar algo');
})

app.listen(8080, ()=>{
    console.log('Servidor escuchando por el puerto 3000');
})