import { Router } from 'express';
import { deleteUser, getUserById, getUsers, signIn, signUp, updateUser } from '../controllers/users';
import { Auth } from '../middlewares/Auth';
import { prv } from './private';

export const api = Router();

api.use('/prv',Auth,prv);
//MÉTODOS TESTEADOS DEPURAR
api.get('/users',getUsers);
api.get('/user/:id',getUserById);

api.post('/up',signUp);
api.post('/in',signIn);

api.put('/user/:id',updateUser);

api.delete('/user/:id',deleteUser);

api.get('/test',Auth,(req,res) => {
    res.status(200).send({user:req.user,role:req.role});
});