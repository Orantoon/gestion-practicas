import {Router} from 'express';

import {deleteTipoUsuario, getTipoUsuario, getTipoUsuarioId, postTipoUsuario, putTipoUsuario} from '../controllers/tipoUsuario.controller'

const router = Router()

router.get('/tipo-usuario', getTipoUsuario);
router.get('/tipo-usuario/:id', getTipoUsuarioId);
router.post('/tipo-usuario', postTipoUsuario);
router.delete('/tipo-usuario/:id', deleteTipoUsuario);
router.put('/tipo-usuario/:id', putTipoUsuario);

export default router;