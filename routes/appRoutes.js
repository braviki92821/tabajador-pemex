import express from "express";
import { body } from "express-validator";
import protegerRuta from '../middleware/protegerRuta.js'
import { actualizarEmpleado, editarEmpleado, eliminarEmpleado, empleados, guardarEmplado, inicio, nuevoEmpleado, perfil, usuarios } from "../controllers/appController.js";

const router = express.Router()

router.get('/inicio', protegerRuta, inicio)

router.get('/perfil', protegerRuta, perfil)

router.get('/usuarios', protegerRuta, usuarios)

router.get('/agregar-empleado', protegerRuta, nuevoEmpleado)
router.post('/agregar-empleado', protegerRuta, body('ficha').notEmpty().withMessage('Debe poner un numero de ficha').isNumeric().withMessage('Ficha solo acepta valores numericos'),
                                               body('ficha').isLength({min:6, max:6}).withMessage('La ficha debe contiener 6 digitos'),
                                               body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
                                               body('nombre').isLength({min:10}).withMessage('Nombre completo obligatorio'),
                                               body('correo').isEmail().notEmpty().withMessage('El correo es obligatorio'),
                                               body('categoria').notEmpty().withMessage('La categoria es obligatoria'),
                                               body('nivel').isNumeric().withMessage('el nivel es obligatorio'),
                                               body('estatus').notEmpty().withMessage('El estatus es obligatorio'),
                                               body('edad').isNumeric().withMessage('La edad es obligatoria'),
                                               body('antiguedad').isNumeric().notEmpty().withMessage('La antiguedad es obligatoria'),
                                               body('direccion').notEmpty().withMessage('La direccion es obligatoria'), guardarEmplado)

router.get('/lista-empleados', protegerRuta, empleados)

router.get('/editar-trabajador/:ficha', protegerRuta, editarEmpleado)
router.post('/editar-trabajador/:ficha', protegerRuta, body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
                                                       body('nombre').isLength({min:10}).withMessage('Nombre completo obligatorio'),
                                                       body('correo').isEmail().notEmpty().withMessage('El correo es obligatorio'),
                                                       body('categoria').notEmpty().withMessage('La categoria es obligatoria'),
                                                       body('nivel').isNumeric().withMessage('el nivel es obligatorio'),
                                                       body('estatus').notEmpty().withMessage('El estatus es obligatorio'),
                                                       body('edad').isNumeric().withMessage('La edad es obligatoria'),
                                                       body('antiguedad').isNumeric().notEmpty().withMessage('La antiguedad es obligatoria'),
                                                       body('direccion').notEmpty().withMessage('La direccion es obligatoria'), actualizarEmpleado)

router.post('/eliminar-trabajador/:ficha', protegerRuta, eliminarEmpleado)
                                            
export default router