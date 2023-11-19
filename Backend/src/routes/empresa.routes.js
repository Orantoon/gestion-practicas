import {Router} from 'express';

import {deleteEmpresa, getEmpresa, getEmpresaId, postEmpresa, putEmpresa} from '../controllers/empresa.controller'

const router = Router()

router.get('/empresa', getEmpresa);
router.get('/empresa/:id', getEmpresaId);
router.post('/empresa', postEmpresa);
router.delete('/empresa/:id', deleteEmpresa);
router.put('/empresa/:id', putEmpresa);

export default router;