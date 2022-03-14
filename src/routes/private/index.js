import { Router } from 'express';
import { DevRoute } from '../../middlewares/Role';
import { dev } from './dev';

export const prv = Router();

prv.use('/dev',DevRoute,dev);