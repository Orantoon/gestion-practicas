import {Router} from 'express';

import {deleteEstudiante, getEstudiante, getEstudianteId, postEstudiante, putEstudiante} from '../controllers/estudiante.controller'

const router = Router()

router.get('/estudiante', getEstudiante);
router.get('/estudiante/:id', getEstudianteId);
router.post('/estudiante', postEstudiante);
router.delete('/estudiante/:id', deleteEstudiante);
router.put('/estudiante/:id', putEstudiante);

export default router;