import jwt from 'jsonwebtoken'

const generarId = () => Date.now() + Math.random().toString(32).substring(2)

const generarPassword = () => Math.random().toString(36).substring(2)

const generarJWT = datos => jwt.sign({
        ficha: datos.ficha,
        nombre: datos.nombre,
       },process.env.JWT_SECRET,{
         expiresIn:'1h'
       })

export {
    generarId,
    generarJWT,
    generarPassword
}