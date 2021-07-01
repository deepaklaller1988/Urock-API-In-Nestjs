import { Document } from 'mongoose';

export interface Feed extends Document {
    category: string;
    title:string;
    description:string;
    post_id:Number;
    token:string;
    post_status:string;
    cover_image:string;
    video_thumbnail:string;
}