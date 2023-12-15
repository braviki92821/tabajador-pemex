import { Asistencias, Ausencias, Capacitaciones, Contratos, DerechoH, Empleado, Usuario } from '../models/index.js'
import db from "../config/db.js";
import usuarios from './usuarios.js';

const importarDatos = async () =>{

    try {
        await db.authenticate()
  
        await db.sync()

        await Promise.all([
            Empleado.bulkCreate(),
            Asistencias.bulkCreate(),
            Ausencias.bulkCreate(),
            Capacitaciones.bulkCreate(),
            Contratos.bulkCreate(),
            DerechoH.bulkCreate(),
            Usuario.bulkCreate(usuarios)
        ])
        
    } catch (error) {
        console.log(error)
    }


}


const eliminarDatos = async() => {
    try {
        await db.sync({force: true})
        console.log('Datos eliminados')
        process.exit() 
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if(process.argv[2]==="-i"){
    importarDatos();
}

if(process.argv[2]==="-e"){
     eliminarDatos();
}