import { model , Schema } from 'mongoose';

const Chapter = new Schema({
    name:{type:String,required:true},
    numb:{type:Number,required:true},
    abbr:{type:String,required:true},
    description:{type:String,required:true},
    book:{type:Schema.ObjectId,ref:'Book',required:true}
});

export default model('Chapter',Chapter);