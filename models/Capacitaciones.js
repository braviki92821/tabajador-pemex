import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Capacitaciones = db.define('capacitaciones',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    ruta: {
        type: DataTypes.STRING
    }
});

export default Capacitaciones