import { Document } from 'mongoose';

export interface Folio extends Document {
    name:string;
    description:string;
    type:number;
}