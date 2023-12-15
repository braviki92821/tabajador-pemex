import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Asistencias = db.define('asistencias', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    ruta: {
        type: DataTypes.STRING
    },
    año: {
        type: DataTypes.SMALLINT
    }
});

export default Asistencias