import express from 'express'
import usuariosController
from '../controllers/usuarios.controller.js'

const router = express.Router();

router.get("/", usuariosController.listar);
export default router