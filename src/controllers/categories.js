import Category from '../models/Category';
import { Forbbiden } from '../services/errors';
import { create, dlete, read, readById, upd } from './crud';

export const createCategory = async (req,res,next) => {
    try {
        const { body } = req;
        const category = await create(body,Category);
        return res.status(200).send({success:true,category});
    } catch (error) {
        next(error);
    }
};

export const getCategories = async (req,res,next) => {
    try {
        const categories = await read(Category,null,'section');
        if(!categories.length) return next(Forbbiden('No se encontraron registros.'));
        return res.status(200).send({sucess:true,categories});
    } catch (error) {
        next(error);
    }
};

export const getCategoryById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const category = await readById(id,Category,null,'section');
        if(!category) return next(Forbbiden('No se encontró el registro'));
        res.status(200).send({success:true,category});
    } catch (error) {
        
    }
};

export const updateCategory = async (req,res,next) => {
    try {
        const id = req.params.id;
        const old = await upd(id,Category,req.body);
        return res.status(200).send({success:true,old});
    } catch (error) {
        next(error);
    }
};

export const deleteCategory = async (req,res,next) => {
    try {
        const deleted = await dlete(req.params.id,Category);
        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
}