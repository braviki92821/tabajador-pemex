import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Contratos = db.define('contratos', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    termino: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    cto: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    departamento: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    jor: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    seccion: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    nivel: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    ruta: {
        type: DataTypes.STRING
    }
});


export default Contratos