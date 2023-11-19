import {Router} from 'express';

import {deleteBitacora, getBitacora, getBitacoraId, postBitacora, putBitacora} from '../controllers/bitacora.controller'

const router = Router()

router.get('/bitacora', getBitacora);
router.get('/bitacora/:id', getBitacoraId);
router.post('/bitacora', postBitacora);
router.delete('/bitacora/:id', deleteBitacora);
router.put('/bitacora/:id', putBitacora);

export default router;