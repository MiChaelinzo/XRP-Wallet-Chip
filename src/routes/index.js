import { Router } from 'express';
import { version } from '../../package.json';
import { create, getBalance, transaction } from '../controllers/wallet';

const router = Router();

router.get('/createWallet', create);

router.get('/getBalance/:xrpAddress', getBalance);

router.post('/transaction', transaction);

router.get('/health', (req, res) => res.send({ version }));

router.get('*', (req, res) => res.send('.'));

export default router;
