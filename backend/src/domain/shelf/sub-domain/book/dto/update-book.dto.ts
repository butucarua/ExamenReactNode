import { CreateBookDto } from '@/domain/shelf/sub-domain/book/dto/create-book.dto';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @Expose()
  @IsString()
  @ApiProperty({ required: false })
  description?: string;
}
