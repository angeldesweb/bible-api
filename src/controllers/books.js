import Book from '../models/Book';
import { Forbbiden } from '../services/errors';
import { create, dlete, read, readById, upd } from './crud';

export const createBook = async (req,res,next) => {
    try {
        const { body } = req;
        const book = await create(body,Book);
        return res.status(200).send({success:true,book});
    } catch (error) {
        next(error);
    }
};

export const getBooks = async (req,res,next) => {
    try {
        const books = await read(Book,null,'category');
        if(!books.length) return next(Forbbiden('No se encontraron registros.'));
        return res.status(200).send({sucess:true,books});
    } catch (error) {
        next(error);
    }
};

export const getBookById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const book = await readById(id,Book,null,'category');
        if(!book) return next(Forbbiden('No se encontró el registro'));
        res.status(200).send({success:true,book});
    } catch (error) {
        
    }
};

export const updateBook = async (req,res,next) => {
    try {
        const id = req.params.id;
        const old = await upd(id,Book,req.body);
        return res.status(200).send({success:true,old});
    } catch (error) {
        next(error);
    }
};

export const deleteBook = async (req,res,next) => {
    try {
        const deleted = await dlete(req.params.id,Book);
        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
}