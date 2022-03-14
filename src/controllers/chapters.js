import Chapter from '../models/Chapter';
import { Forbbiden } from '../services/errors';
import { create, dlete, read, readById, upd } from './crud';

export const createChapter = async (req,res,next) => {
    try {
        const { body } = req;
        const chapter = await create(body,Chapter);
        return res.status(200).send({success:true,chapter});
    } catch (error) {
        next(error);
    }
};

export const getChapters = async (req,res,next) => {
    try {
        const chapters = await read(Chapter,null,'book');
        if(!chapters.length) return next(Forbbiden('No se encontraron registros.'));
        return res.status(200).send({sucess:true,chapters});
    } catch (error) {
        next(error);
    }
};

export const getChapterById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const chapter = await readById(id,Chapter,null,'book');
        if(!chapter) return next(Forbbiden('No se encontró el registro'));
        res.status(200).send({success:true,chapter});
    } catch (error) {
        
    }
};

export const updateChapter = async (req,res,next) => {
    try {
        const id = req.params.id;
        const old = await upd(id,Chapter,req.body);
        return res.status(200).send({success:true,old});
    } catch (error) {
        next(error);
    }
};

export const deleteChapter = async (req,res,next) => {
    try {
        const deleted = await dlete(req.params.id,Chapter);
        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
}