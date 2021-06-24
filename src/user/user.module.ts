import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

import { ForgotPasswordSchema } from './schemas/forgot-password.schema';
import { UserSchema } from './schemas/user.schema';
import { ProfileSchema } from './schemas/profile.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'ForgotPassword', schema: ForgotPasswordSchema}]),
    MongooseModule.forFeature([{ name: 'Folio', schema: ProfileSchema}]),
    AuthModule,
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
