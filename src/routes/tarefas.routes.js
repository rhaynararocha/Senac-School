import express from 'express'
import usuariosController
    from '../controllers/usuarios.controller'

const router = express.Router();

router.get("/", usuariosController.listar);