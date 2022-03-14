import { Router } from 'express';

export const dev = Router();

dev.get('/',(req,res) => {
    res.status(200).send('I dev');
})