import express  from 'express'
import db from './config/db.js'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import appRoutes from './routes/appRoutes.js'

const app = express()

app.use( express.urlencoded({extended:true}), express.json())

const port = process.env.PORT || 5500

app.use( cookieParser() )

app.use( csrf({cookie:true}))

try{
    await db.authenticate();
    db.sync()
    console.log('Conectado a mysql')
}catch(error){
     console.log(error)
}

app.use('/auth', authRoutes)
app.use('/admin',appRoutes)

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))

app.listen(port, ()=>{
    console.log('El servidor esta en el puerto '+ port)
})