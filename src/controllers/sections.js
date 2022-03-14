import Section from '../models/Section';
import { Forbbiden } from '../services/errors';
import { create, dlete, read, readById, upd } from './crud';

export const createSection = async (req,res,next) => {
    try {
        const { body } = req;
        const section = await create(body,Section);
        return res.status(200).send({success:true,section});
    } catch (error) {
        next(error);
    }
};

export const getSections = async (req,res,next) => {
    try {
        const sections = await read(Section,null,null);
        if(!sections.length) return next(Forbbiden('No se encontraron registros.'));
        return res.status(200).send({sucess:true,sections});
    } catch (error) {
        next(error);
    }
};

export const getSectionById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const section = await readById(id,Section,null,null);
        if(!section) return next(Forbbiden('No se encontró el registro'));
        res.status(200).send({success:true,section});
    } catch (error) {
        
    }
};

export const updateSection = async (req,res,next) => {
    try {
        const id = req.params.id;
        const old = await upd(id,Section,req.body);
        return res.status(200).send({success:true,old});
    } catch (error) {
        next(error);
    }
};

export const deleteSection = async (req,res,next) => {
    try {
        const deleted = await dlete(req.params.id,Section);
        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
}