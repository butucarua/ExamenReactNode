import { CreateShelfDto } from "@/domain/shelf/dto/create-shelf.dto";
import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class UpdateShelfDto extends PartialType(CreateShelfDto) {
  @Expose()
  @IsString()
  @ApiProperty({ required: false })
  id?: string;

  @Expose()
  @IsString()
  @ApiProperty({ required: false })
  name?: string;

  @Expose()
  @IsString()
  @ApiProperty({ required: false })
  description?: string;
}
