import { Authorization } from "../services/errors"

export const DevRoute = (req,res,next) => {
    if(req.role !== 'Dev') return next(Authorization('Permisos insuficientes'));

    next();
};

export const AdminRoute = (req,res,next) => {
    const isAdm  = req.role === 'Adm' ? true : req.role === 'Dev' ? true : false;
    if(!isAdm) return next(Authorization('Permisos insuficientes'));
    next();
}