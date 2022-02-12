import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

@Exclude()
export class GetShelfByName {
  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  name: string;
}