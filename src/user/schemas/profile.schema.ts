import * as mongoose from 'mongoose';
import * as validator from 'validator';
import * as bcrypt from 'bcrypt';
import { number } from 'joi';
export const ProfileSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'name_IS_BLANK'],
    },
    description: {
        type: String,
        required: [true, 'description_IS_BLANK'],
    },
    type: {
        type: Number,
        required: [true, 'description_IS_BLANK'],
    }

});