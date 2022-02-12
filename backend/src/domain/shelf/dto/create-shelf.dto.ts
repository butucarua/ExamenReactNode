import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsNotEmpty, IsString } from "class-validator";

@Exclude()
export class CreateShelfDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  description: string;
}