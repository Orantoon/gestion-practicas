import {Router} from 'express';

import {deleteComentarioBitacora, getComentarioBitacora, getComentarioBitacoraId, postComentarioBitacora, putComentarioBitacora} from '../controllers/comentarioBitacora.controller'

const router = Router()

router.get('/comentario-bitacora', getComentarioBitacora);
router.get('/comentario-bitacora/:id', getComentarioBitacoraId);
router.post('/comentario-bitacora', postComentarioBitacora);
router.delete('/comentario-bitacora/:id', deleteComentarioBitacora);
router.put('/comentario-bitacora/:id', putComentarioBitacora);

export default router;