import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UploadDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  filename: string;
}
