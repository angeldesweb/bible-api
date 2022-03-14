import Verse from '../models/Verse';
import { Forbbiden } from '../services/errors';
import { create, dlete, read, readById, upd } from './crud';

export const createVerse = async (req,res,next) => {
    try {
        const { body } = req;
        const verse = await create(body,Verse);
        return res.status(200).send({success:true,verse});
    } catch (error) {
        next(error);
    }
};

export const getVerses = async (req,res,next) => {
    try {
        const verses = await read(Verse,null,{path:'chapter',path:'version'});
        if(!verses.length) return next(Forbbiden('No se encontraron registros.'));
        return res.status(200).send({sucess:true,verses});
    } catch (error) {
        next(error);
    }
};

export const getVerseById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const verse = await readById(id,Verse,null,{path:'chapter',path:'version'});
        if(!verse) return next(Forbbiden('No se encontró el registro'));
        res.status(200).send({success:true,verse});
    } catch (error) {
        
    }
};

export const updateVerse = async (req,res,next) => {
    try {
        const id = req.params.id;
        const old = await upd(id,Verse,req.body);
        return res.status(200).send({success:true,old});
    } catch (error) {
        next(error);
    }
};

export const deleteVerse = async (req,res,next) => {
    try {
        const deleted = await dlete(req.params.id,Verse);
        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
}