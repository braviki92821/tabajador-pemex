import db from "../config/db.js";
import { DataTypes } from "sequelize";

const DerechoH = db.define('derechohabientes',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    nombre: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    vigencia: {
        type: DataTypes.DATE,
        allowNull: false
    },
    adscripcion: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    calle: {
        type: DataTypes.STRING(60),
        allowNull: false 
    },
    colonia: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    municipio: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
});

export default DerechoH