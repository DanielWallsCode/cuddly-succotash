import { Router } from "express";
import { crearVotacion, obtenerVotaciones, obtenerVotacionMa, obtenerVotacionCa, obtenerVotacionEl, obtenerVotacionGu } from "../controllers/votaciones.js";

const router = Router();


router.get('/',obtenerVotaciones);

router.get('/api/maria',obtenerVotacionMa);

router.get('/api/capriles',obtenerVotacionCa);

router.get('/api/benjamin',obtenerVotacionEl);

router.get('/api/guido',obtenerVotacionGu);

router.post('/api',crearVotacion);


export default router;