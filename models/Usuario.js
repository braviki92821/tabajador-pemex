import db from "../config/db.js";
import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt'

const Usuario = db.define('usuarios',{
    ficha : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    correo: {
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
    password: {
        type: DataTypes.STRING,
    },
    nivel: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
},{
    hooks: {
        beforeCreate: async (usuario)=>{
           const salt = await bcrypt.genSalt(10)
           usuario.password = await bcrypt.hash(usuario.password,salt)
        }
    },
    scopes:{
        eliminarPassword:{
            attributes:{
            exclude:['password','createdAt','updatedAt' ]
            }
        }
    }
});

Usuario.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password,this.password)
}

export default Usuario