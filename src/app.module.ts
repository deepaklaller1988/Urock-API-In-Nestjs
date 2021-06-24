import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { MulterModule } from '@nestjs/platform-express';
//import { Folio } from './user/interfaces/folio.interface';
import { UserController } from './user/user.controller';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI), 
    UserModule,
    AuthModule, 
    ArticleModule,
    MulterModule.register({
      dest: './files',
    }),
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "testingingt.72@gmail.com",
            pass: "@Contrive27#"
        },
      },
      //transport: 'smtps://jitender.tanwar@contriverz.com:@guruashu@smtp.yourdomain.com',
      defaults: {
        from:'"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
