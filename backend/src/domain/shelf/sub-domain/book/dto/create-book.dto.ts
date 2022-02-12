import { BookGenres } from "@/domain/shelf/sub-domain/book/entities/book.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsString, IsEnum } from "class-validator";

@Exclude()
export class CreateBookDto {
  @Expose()
  @IsEnum(BookGenres)
  @IsNotEmpty()
  @ApiProperty({ required: true })
  genre: BookGenres;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  title: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  shelfId: string;
}