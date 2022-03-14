import { model , Schema } from 'mongoose';

const Section = new Schema({
    name:{type:String,required:true,unique:true},
    abbr:{type:String,required:true},
    lang:{type:String,enum:['en','es'],required:true},
    description:{type:String,required:true}
});

export default model('Section',Section);