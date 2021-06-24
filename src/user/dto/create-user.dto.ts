import { IsNotEmpty, IsEmail, IsString, IsDate, IsDateString ,IsArray} from 'class-validator';
import { FormData } from 'form-data';
import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateUserDto {

   @ApiModelProperty({
     example: ' tanw',
     description: 'The name of the User',
     format: 'string',
   })
   profile: string;

   @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  type: number;

   @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
   name : string;

   @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  description: string;

  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  @Type(() => Array)
  file : FormData;

  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  readonly profession: string;

  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  readonly country: string;

  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  readonly referral_code: string;


  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  readonly language: string;

  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  readonly ethnicity: string;


  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  readonly term_of_service: string;



  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  readonly last_name: string;

    // fullName
    @ApiModelProperty({
      example: 'pejman hadavi',
      description: 'The name of the User',
      format: 'string',
    })
    readonly first_name: string;

    @ApiModelProperty({
      example: 'pejman@gmail.com',
      description: 'The email of the User',
      format: 'email',
      uniqueItems: true,
    })
    readonly username: string;

    @ApiModelProperty({
      example: 'pejman@gmail.com',
      description: 'The email of the User',
      format: 'email',
      uniqueItems: true,
    })
    @Type(() => Date)
   // @IsDate()
    //@IsString()
    readonly register_date: Date;

    // Email
    @ApiModelProperty({
      example: 'pejman@gmail.com',
      description: 'The email of the User',
      format: 'email',
      uniqueItems: true,
    })
    @Type(() => IsEmail)
   // @IsEmail()
    readonly email: string;

    // Password
    @ApiModelProperty({
      example: 'secret password change me!',
      description: 'The password of the User',
      format: 'string',
    })
    readonly password: string;
  }

 