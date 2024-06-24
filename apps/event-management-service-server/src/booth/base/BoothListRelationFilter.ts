/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BoothWhereInput } from "./BoothWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BoothListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BoothWhereInput,
  })
  @ValidateNested()
  @Type(() => BoothWhereInput)
  @IsOptional()
  @Field(() => BoothWhereInput, {
    nullable: true,
  })
  every?: BoothWhereInput;

  @ApiProperty({
    required: false,
    type: () => BoothWhereInput,
  })
  @ValidateNested()
  @Type(() => BoothWhereInput)
  @IsOptional()
  @Field(() => BoothWhereInput, {
    nullable: true,
  })
  some?: BoothWhereInput;

  @ApiProperty({
    required: false,
    type: () => BoothWhereInput,
  })
  @ValidateNested()
  @Type(() => BoothWhereInput)
  @IsOptional()
  @Field(() => BoothWhereInput, {
    nullable: true,
  })
  none?: BoothWhereInput;
}
export { BoothListRelationFilter as BoothListRelationFilter };
