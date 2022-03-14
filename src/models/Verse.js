import { model , Schema } from 'mongoose';

const Verse = new Schema({
    id:{type:String,required:true,unique:true},
    numb:{type:Number,required:true},
    content:{type:String,required:true},
    chapter:{type:Schema.ObjectId,ref:'Chapter'},
    version:{type:Schema.ObjectId,ref:'Version'},
});

export default model('Verse',Verse);