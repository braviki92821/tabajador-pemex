import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Bitacora = db.define('bitacora', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    accion: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE
    },
    seccion: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
});

export default Bitacora