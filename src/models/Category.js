import { model , Schema } from 'mongoose';

const Category = new Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    section:{type:Schema.ObjectId,ref:'Section',required:true}
});

export default model('Category',Category);