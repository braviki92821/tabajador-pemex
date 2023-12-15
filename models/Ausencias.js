import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Ausencias = db.define('ausencias', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaTermino: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    reaundo: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ruta: {
        type: DataTypes.STRING
    }
});


export default Ausencias