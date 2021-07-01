import { IsNotEmpty, IsEmail, IsString, IsDate, IsDateString ,IsArray} from 'class-validator';
import { FormData } from 'form-data';
import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatefeedDto {
@ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
  category: string;
  @ApiModelProperty({
    example: ' tanw',
    description: 'The name of the User',
    format: 'string',
  })
    title:string;
    @ApiModelProperty({
      example: ' tanw',
      description: 'The name of the User',
      format: 'string',
    })
    description:string;
    @ApiModelProperty({
      example: ' tanw',
      description: 'The name of the User',
      format: 'number',
    })
    post_id:Number;
    @ApiModelProperty({
      example: ' tanw',
      description: 'The name of the User',
      format: 'string',
    })
    token:string;
    @ApiModelProperty({
      example: ' tanw',
      description: 'The name of the User',
      format: 'string',
    })
    post_status:string;
    @ApiModelProperty({
      example: ' tanw',
      description: 'The name of the User',
      format: 'string',
    })
    cover_image:string;
    @ApiModelProperty({
      example: ' tanw',
      description: 'The name of the User',
      format: 'string',
    })
    video_thumbnail:string;
}