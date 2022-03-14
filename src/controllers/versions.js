import Version from '../models/Version';
import { Forbbiden } from '../services/errors';
import { create, dlete, read, readById, upd } from './crud';

export const createVersion = async (req,res,next) => {
    try {
        const { body } = req;
        const version = await create(body,Version);
        return res.status(200).send({success:true,version});
    } catch (error) {
        next(error);
    }
};

export const getVersions = async (req,res,next) => {
    try {
        const versions = await read(Version,null,null);
        if(!versions.length) return next(Forbbiden('No se encontraron registros.'));
        return res.status(200).send({sucess:true,versions});
    } catch (error) {
        next(error);
    }
};

export const getVersionById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const version = await readById(id,Version,null,null);
        if(!version) return next(Forbbiden('No se encontró el registro'));
        res.status(200).send({success:true,version});
    } catch (error) {
        
    }
};

export const updateVersion = async (req,res,next) => {
    try {
        const id = req.params.id;
        const old = await upd(id,Version,req.body);
        return res.status(200).send({success:true,old});
    } catch (error) {
        next(error);
    }
};

export const deleteVersion = async (req,res,next) => {
    try {
        const deleted = await dlete(req.params.id,Version);
        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
}