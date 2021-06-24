import * as mongoose from 'mongoose';
import * as validator from 'validator';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema ({
    profile: {
        type: String,
        required: [true, 'Profile_IS_BLANK'],
    },
    referral_code: {
        type: String,
        required: [true, 'referralCode is blank'],
    },
    language: {
        type: String,
        required: [true, 'language is blank'],
    },
    ethnicity: {
        type: String,
        required: [true, 'ethinicity is blank'],
    },
    term_of_service: {
        type: String,
        required: [true, 'term-of-service is blank'],
    },
    country: {
        type: String,
        required: [true, 'country_IS_BLANK'],
    },
    profession: {
        type: String,
        required: [true, 'Profession_IS_BLANK'],
    },
    first_name: {
        type: String,
        required: [true, 'firstname_is_BLANK'],
    },
    last_name: {
        type: String,
        required: [true, 'Lastname_BLANK'],
    },
    username: {
        type: String,
        required: [true, 'username_is_BLANK'],
    },
    register_date: {
        type: Date,
        required: [true, 'register_date_is_BLANK'],
    },
    email: {
        type: String,
        validate: validator.isEmail,
        required: [true, 'EMAIL_IS_BLANK'],
    },
    password: {
        type: String,
        required: [true, 'PASSWORD_IS_BLANK'],
    },
    bankAccountNumber: {
        type: String,
        maxlength: 32,
    },
    bankAccountOwnerName: {
        type: String,
    },
    roles: {
        type: [String],
        default: ['user'],
    },
    verification: {
        type: String,
        validate: validator.isUUID,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationExpires: {
        type: Date,
        default: Date.now,
    },
    loginAttempts: {
        type: Number,
        default: 0,
    },
    blockExpires: {
      type: Date,
      default: Date.now,
    },
}, {
    versionKey: false,
    timestamps: true,
});

UserSchema.pre('save', async function(next: mongoose.HookNextFunction) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      // tslint:disable-next-line:no-string-literal
      const hashed = await bcrypt.hash(this['password'], 10);
      // tslint:disable-next-line:no-string-literal
      this['password'] = hashed;
      return next();
    } catch (err) {
      return next(err);
    }
  });
