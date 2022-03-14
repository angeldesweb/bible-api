import { model , Schema } from 'mongoose';

const Book = new Schema({
    id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    abbr:{type:String,required:true},
    description:{type:String,required:true},
    chapters:{type:Number,required:true},
    category:{type:Schema.ObjectId,ref:'Category'}
});

export default model('Book',Book);