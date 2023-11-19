import {Router} from 'express';

import {deleteInforme, getInforme, getInformeId, postInforme, putInforme} from '../controllers/informe.controller'

const router = Router()

router.get('/informe', getInforme);
router.get('/informe/:id', getInformeId);
router.post('/informe', postInforme);
router.delete('/informe/:id', deleteInforme);
router.put('/informe/:id', putInforme);

export default router;