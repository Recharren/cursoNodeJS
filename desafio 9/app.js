const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/usuarios');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

//Crear usuario
app.post('/',(req,res)=>{
    const usuario = User(req.body);
    usuario.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({
        mensaje : error
    }) )
})

//Buscar todos los usuarios
app.get('/',(req,res)=>{
    User.find({},(err, docs)=>{
        docs.forEach(usuario => {
            console.log(`nombre: ${(usuario.name)}, userName: ${usuario.userName}`);
        });
        
        res.send(docs);
    })
})

mongoose.connect(process.env.MONGODB_URI).
    then(()=> console.log('Conectado a la DB de MongoDB Atlas')).
    catch((error)=> console.error(error));

app.listen(port, ()=>{
    console.log('Servidor escuchando por el puerto '+port);
})