import {Router} from 'express';

import {deleteUsuario, getUsuario, getUsuarioId, postUsuario, putUsuario} from '../controllers/usuario.controller'

const router = Router()

router.get('/usuario', getUsuario);
router.get('/usuario/:id', getUsuarioId);
router.post('/usuario', postUsuario);
router.delete('/usuario/:id', deleteUsuario);
router.put('/usuario/:id', putUsuario);

export default router;