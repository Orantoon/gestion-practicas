import {Router} from 'express';

import {deleteComentarioInforme, getComentarioInforme, getComentarioInformeId, postComentarioInforme, putComentarioInforme} from '../controllers/comentarioInforme.controller'

const router = Router()

router.get('/comentario-informe', getComentarioInforme);
router.get('/comentario-informe/:id', getComentarioInformeId);
router.post('/comentario-informe', postComentarioInforme);
router.delete('/comentario-informe/:id', deleteComentarioInforme);
router.put('/comentario-informe/:id', putComentarioInforme);

export default router;