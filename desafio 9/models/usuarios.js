const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: true
        },
        userName:{
            type : String,
            required: true
        }
    }
)

module.exports = mongoose.model('User', usuariosSchema)