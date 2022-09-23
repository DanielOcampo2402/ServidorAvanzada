//const express = require('express')//Forma vieja de importar
import  express  from 'express'
import {rutasPersonalizadas} from '../Routes/rutas.js'
import {conectarConMongo} from '../Database/conexion.js'
export class ServidorAPI{

    constructor(){
        this.app = express()
        this.ConectarConDB()
        this.AtenderPeticiones()
    }
    //Metodos de la clase ServidorAPI
    DespertarServidor(){
        //ENCENDIENDO EL SERVIDOR EN EL PUERTO 3000
        this.app.listen(process.env.PORT,function(){
        console.log("SERVIDOR ENCENDIDO")
})
    }
    AtenderPeticiones(){
        this.app.use('/', rutasPersonalizadas)
    }
        
    ConectarConDB(){
        conectarConMongo()
    }

}