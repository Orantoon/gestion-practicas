import {Router} from 'express';

import {deletePractica, getPractica, getPracticaId, postPractica, putPractica} from '../controllers/practica.controller'

const router = Router()

router.get('/practica', getPractica);
router.get('/practica/:id', getPracticaId);
router.post('/practica', postPractica);
router.delete('/practica/:id', deletePractica);
router.put('/practica/:id', putPractica);

export default router;