import { Document } from 'mongoose';

export interface User extends Document {
    first_name:string;
    last_name:string;
    fullName: string;
    username: string;
    register_date: Date;
    profession:string;
    country:string;
    referral_code:string;
    language:string;
    ethnicity:string;
    term_of_service: string;
    profile: string;
    email: string;
    password: string;
    roles: [string];
    verification: string;
    verified: boolean;
    verificationExpires: Date;
    loginAttempts?: number;
    blockExpires?: Date;
    bankAccountNumber?: string;
    bankAccountName?: string;
}
