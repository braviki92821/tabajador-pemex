import { Empleado, Usuario } from '../models/index.js'
import { check,  validationResult } from "express-validator";
import { Op } from 'sequelize'

const inicio = (req, res) => {
    res.render('admin/inicio',{
        pagina: 'Hola Bienvenido',
        csrfToken: req.csrfToken()
    })
}

const perfil = async (req, res) => {

    const { ficha } = req.usuario

    const usuario = await Usuario.scope("eliminarPassword").findByPk(ficha)

    if(!usuario){
        return res.clearCookie("_token").redirect("/auth/login");
    }

    res.render('admin/perfil',{
    pagina: 'Tus Datos',
    csrfToken: req.csrfToken(),
    usuario
    })
}

const usuarios = async (req, res) => {
    const { ficha } = req.usuario

    const usuarios = await Usuario.scope('eliminarPassword').findAll({
        where: { ficha: { [Op.ne]: ficha }},
    })

    res.render('admin/usuarios', {
        pagina: 'Usuarios',
        csrfToken: req.csrfToken(),
        usuarios
    })
}

const nuevoEmpleado = (req, res) => {
    res.render('admin/añadir-trabajador', {
        pagina: 'Agregar Empleado',
        csrfToken: req.csrfToken(),
        datos: {}
    })
}

const guardarEmplado = async (req, res) => {
    // const exp = /[A-ZÑ&]{3,4}[0-9]{6}[A-V1-9][A-Z1-9][0-9A]/;
    // await check('rfc').custom((value) => { return !exp.test(rfc) } ).withMessage('rfc no valido').run(req)
    let resultado = validationResult(req);
    // const { rfc } = req.body
    
    // console.log(!exp.test(rfc))
    // if(!exp.test(rfc)){
    //     resultado.array().push('rfc no valido')
    // }

    if(!resultado.isEmpty()){
        return res.render('admin/añadir-trabajador', {
            pagina: 'Agregar Empleado',
            csrfToken: req.csrfToken(),
            datos: req.body,
            errores: resultado.array()
        })
    }

    const { ficha, nombre, correo, categoria, nivel, estatus, edad, antiguedad, direccion, rfc} = req.body

    const existeEmpleado = await Empleado.findByPk(ficha)

    if(existeEmpleado) {
        return res.render('admin/añadir-trabajador', {
            pagina: 'Agregar Empleado',
            csrfToken: req.csrfToken(),
            datos: req.body,
            errores: [ { msg:'La ficha ya esta registrada' } ]
        })
    }
    
    await Empleado.create({
        ficha, nombre, correo, categoria, nivel, estatus, edad, antiguedad, direccion, rfc
    })
    
    res.redirect('/admin/lista-empleados?mostrar=todo')
}

const empleados = async (req, res) => {

    const { mostrar } = req.query ?? null
    const { error } =req.query ?? null
    
    if(mostrar == null || mostrar == undefined) {
     return res.redirect('/admin/lista-empleados?mostrar=todo')
    }

    let empleados

    if(error == 'credenciales'){
        empleados = await Empleado.findAll()

        return res.render('admin/trabajadores', {
        pagina: 'Lista de Empleados',
        csrfToken: req.csrfToken(),
        empleados,
        errores: [ { msg:'Credenciales erroneas' } ]
       }) 
    }
    

    if(mostrar != 'todo' && error == null) {
        empleados = await Empleado.findAll({ where: { ficha: mostrar } })

        return res.render('admin/trabajadores', {
        pagina: 'Lista de Empleados',
        csrfToken: req.csrfToken(),
        empleados
       }) 
    }
    
    empleados = await Empleado.findAll()

    res.render('admin/trabajadores', {
        pagina: 'Lista de Empleados',
        csrfToken: req.csrfToken(),
        empleados
    })

}

const editarEmpleado = async (req, res) => {
    const { ficha } = req.params

    const empleado = await Empleado.findByPk(ficha)

    if(!empleado) {
        return res.redirect('/admin/lista-empleados?mostrar=todo')
    }

    res.render('admin/editar-trabajador',{
        pagina: 'Editar datos',
        csrfToken: req.csrfToken(),
        empleado
    })
    
}

const actualizarEmpleado = async (req, res) => {
    let resultado = validationResult(req);

    const { ficha } = req.params

    const empleado = await Empleado.findByPk(ficha)

    if(!empleado) {
        return res.redirect('/admin/lista-empleados?mostrar=todo')
    }

    if(!resultado.isEmpty()){
        return res.render('admin/editar-trabajador', {
            pagina: 'Editar Empleado',
            csrfToken: req.csrfToken(),
            empleado,
            errores: resultado.array()
        })
    }

    const { nombre, correo, categoria, nivel, estatus, edad, antiguedad, direccion, rfc } = req.body

    try {
        empleado.set( { nombre, correo, categoria, nivel, estatus, edad, antiguedad, direccion, rfc } )
        await empleado.save()
        res.redirect('/admin/lista-empleados?mostrar=todo')
    } catch (error) {
        console.log(error)
    }

    
}

const eliminarEmpleado = async (req, res) => {
    const { ficha } = req.params
    const{ password } = req.body

    const [ empleado, usuario  ] = await Promise.all([
        Empleado.findByPk(ficha),
        Usuario.findByPk(req.usuario.ficha)
    ])

    if(!empleado) {
        return res.redirect('/admin/lista-empleados?mostrar=todo')
    }
    
    if(!usuario.verificarPassword(password)){
        return res.redirect('/admin/lista-empleados?mostrar=todo&error=credenciales')
    }

    await empleado.destroy()
    res.redirect('/admin/lista-empleados?mostrar=todo')
}

export {
    inicio,
    perfil,
    usuarios,
    nuevoEmpleado,
    guardarEmplado,
    empleados,
    editarEmpleado,
    actualizarEmpleado,
    eliminarEmpleado
}