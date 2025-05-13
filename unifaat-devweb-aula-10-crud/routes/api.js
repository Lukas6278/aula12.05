import { Router } from 'express';
import ApiController from '../app/Controllers/ApiController.js';

const router = Router();

router.get('/', ApiController.list);

router.get('/:id', ApiController.get);

router.post('/', ApiController.insert);

router.put('/:id', ApiController.update);

router.delete('/:id', ApiController.delete);

export default router;