import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Empleado = db.define('empleados',{
    ficha : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    perfil: {
        type: DataTypes.STRING,
    },
    categoria: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    nivel: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    estatus: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    edad: {
        type: DataTypes.SMALLINT,
        allowNull: false, 
    },
    antiguedad: {
        type: DataTypes.SMALLINT,
        allowNull: false, 
    },
    direccion: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    rfc: {
        type: DataTypes.STRING(13),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(60),
        allowNull: false  
    }

});

export default Empleado