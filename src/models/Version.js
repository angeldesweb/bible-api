import { model , Schema } from 'mongoose';

const Version = new Schema({
    name:{type:String,required:true,unique:true},
    abbr:{type:String,required:true,unique:true},
    description:{type:String,required:true}
});

export default model('Version',Version);