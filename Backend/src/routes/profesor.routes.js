import {Router} from 'express';

import {deleteProfesor, getProfesor, getProfesorId, postProfesor, putProfesor} from '../controllers/profesor.controller'

const router = Router()

router.get('/profesor', getProfesor);
router.get('/profesor/:id', getProfesorId);
router.post('/profesor', postProfesor);
router.delete('/profesor/:id', deleteProfesor);
router.put('/profesor/:id', putProfesor);

export default router;