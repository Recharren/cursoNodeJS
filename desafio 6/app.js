const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
let listaPersonas = [];
let listaMascotas = [];



app.use(express.json());
app.use(express.urlencoded()); 

//Routers
const routerPersonas = express.Router();
const routerMascotas = express.Router();
app.use('/personas', routerPersonas);
app.use('/mascotas', routerMascotas);


// Index
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'));
})

//----------Personas-------------
routerPersonas.get('/listar', (req,res)=>{
    if(listaPersonas.length>0){ 
        res.send(listaPersonas);
    } else res.send('No hay personas cargadas.')
})
routerPersonas.post('/guardar',(req,res)=>{
    const persona = {id: listaPersonas.length+1,...req.body};
    listaPersonas.push(persona);
    console.log('Persona guardada con éxito!');
})
//------------- Mascotas ------------
routerMascotas.get('/listar',(req,res)=>{
    if(listaMascotas.length>0){
        res.send(listaMascotas);
    } else res.send('No hay mascotas cargadas');
})
routerMascotas.post('/guardar',(req,res)=>{

    const mascota = { id: listaMascotas.length+1,...req.body};
    listaMascotas.push(mascota);
    res.send('Mascota guardada con éxito!');
    console.log('Mascota guardada con éxito!');
    
})
// Rutas
app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.listen(8080,()=>{
    console.log('Servidor escuchando por el puerto 8080');
})