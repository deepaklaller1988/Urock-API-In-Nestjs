import * as mongoose from 'mongoose';
import * as validator from 'validator';
import * as bcrypt from 'bcrypt';
import { number } from 'joi';
export const FeedSchema = new mongoose.Schema ({
    category: {type:String},
    title:{type:String},
    description:{type:String},
    post_id:{type:Number},
    token:{type:String},
    post_status:{type:String},
    cover_image:{type:String},
    video_thumbnail:{type:String},
});
    
