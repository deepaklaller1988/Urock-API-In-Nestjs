import { Roles } from './../auth/decorators/roles.decorator';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
import { Request,Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { Controller, Get, Post, Body, UseGuards, Req, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyUuidDto } from './dto/verify-uuid.dto';
import { UserService } from './user.service';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiUseTags,
    ApiBearerAuth,
    ApiImplicitHeader,
    ApiOperation,
    } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import {
    UseInterceptors,
    UploadedFile
  } from "@nestjs/common";
  import { FileInterceptor } from "@nestjs/platform-express";
  
  import { diskStorage } from "multer";
  import { extname } from "path";import { multerOptions } from '../config/multer.config';


@ApiUseTags('User')
@Controller()
@UseGuards(RolesGuard)
export class UserController {
    constructor(
        private readonly userService: UserService,
        ) {}


    @Post('wp-json/mobileapi/v1/register')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({title: 'Register user',})
    @ApiCreatedResponse({})
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async register(@Body() createUserDto: CreateUserDto,@UploadedFile() file) {
        return await this.userService.create(createUserDto);
    }

    @Post('wp-json/mobileapi/v1/upload_image')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({title: 'register page upload image',})
    @ApiCreatedResponse({})
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async imageupload(@UploadedFile() file) {
        return {status : "ok"};
    }

    
    @Post('wp-json/mobileapi/v1/upload_portfolio')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({title: 'upload portfolio',})
    @ApiCreatedResponse({})
    @UseInterceptors(FileInterceptor('file[0]', multerOptions))
    async upload_file(@Body() createUserDto: CreateUserDto,@UploadedFile() file) {
       // console.log("file upload function in portff")
        return await this.userService.create_folio(createUserDto);
    }

    @Post('wp-json/mobileapi/v1/update_profile')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({title: 'update profile',})
    @ApiOkResponse({})
    async update_profile(@Req() req: Request,@Body() createUserDto: CreateUserDto) {
        console.log("In the message");
        return await this.userService.update_to(createUserDto,req);
    }


    @Post('verify-email')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Verify Email',})
    @ApiOkResponse({})
    async verifyEmail(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
        return await this.userService.verifyEmail(req, verifyUuidDto);
    }

    @Post('wp-json/jwt-auth/v1/token')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Login User',})
    @ApiOkResponse({})
    async login(@Req() req: Request, @Body() loginUserDto: LoginUserDto) {
       // console.log(req.body,"controller");
        return await this.userService.login(req, loginUserDto);
    }

    @Post('refresh-access-token')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({title: 'Refresh Access Token with refresh token',})
    @ApiCreatedResponse({})
    async refreshAccessToken(@Body() refreshAccessTokenDto: RefreshAccessTokenDto) {
        return await this.userService.refreshAccessToken(refreshAccessTokenDto);
    }

    @Post('/wp-json/mobileapi/v1/retrieve_password')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Forgot password',})
    @ApiOkResponse({})
    async forgotPassword(@Req() req: Request, @Body() createForgotPasswordDto: CreateForgotPasswordDto) {
        return await this.userService.forgotPassword(req, createForgotPasswordDto);
    }

    @Post('forgot-password-verify')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Verfiy forget password code',})
    @ApiOkResponse({})
    async forgotPasswordVerify(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
        return await this.userService.forgotPasswordVerify(req, verifyUuidDto);
    }

    @Post('reset-password')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Reset password after verify reset password',})
    @ApiBearerAuth()
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @ApiOkResponse({})
    async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        return await this.userService.resetPassword(resetPasswordDto);
    }

    
    @Get('/wp-json/mobileapi/v1/getProfile')
    // @UseGuards(AuthGuard('jwt'))
     @ApiBearerAuth()
     @ApiOperation({title: 'A private route for check the auth',})
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    
     findAll(@Req() req: Request) {
       // console.log(req.query);
        return this.userService.findAll(req);
    }

    // @Get('data')
    // @UseGuards(AuthGuard('jwt'))
    // @Roles('admin')
    // @ApiBearerAuth()
    // @ApiOperation({title: 'A private route for check the auth',})
    // @ApiImplicitHeader({
    //     name: 'Bearer',
    //     description: 'the token we need for auth.'
    // })
    // @HttpCode(HttpStatus.OK)
    // @ApiOkResponse({})
    // findAll() {
    //     return this.userService.findAll();
    // }
}
