import express from "express";
import { body } from "express-validator";
import { autenticar, formularioLogin, cerrarSesion, formularioRegistro, registrarUsuario } from "../controllers/authController.js";
import protegerRuta from '../middleware/protegerRuta.js'

const router = express.Router()

router.get('/login', formularioLogin)
router.post('/login', autenticar)

router.post('/cerrar-sesion', cerrarSesion)

router.get('/nuevo-usuario', protegerRuta, formularioRegistro)
router.post('/nuevo-usuario', protegerRuta, body("ficha").notEmpty().withMessage("No se permiten valores vacios"),
                                            body("nombre").notEmpty().withMessage("No se permiten valores vacios"),
                                            body("correo").isEmail().notEmpty().withMessage("correo no invalido"),
                                            body("categoria").notEmpty().withMessage("No se permiten valores vacios"),
                                            body("nivel").notEmpty().withMessage("Seleccione un tipo de usuario"), registrarUsuario)

// router.get('/usuarios')

export default router