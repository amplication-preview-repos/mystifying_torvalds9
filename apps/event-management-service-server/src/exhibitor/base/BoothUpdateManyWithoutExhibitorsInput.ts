/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BoothWhereUniqueInput } from "../../booth/base/BoothWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BoothUpdateManyWithoutExhibitorsInput {
  @Field(() => [BoothWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BoothWhereUniqueInput],
  })
  connect?: Array<BoothWhereUniqueInput>;

  @Field(() => [BoothWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BoothWhereUniqueInput],
  })
  disconnect?: Array<BoothWhereUniqueInput>;

  @Field(() => [BoothWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BoothWhereUniqueInput],
  })
  set?: Array<BoothWhereUniqueInput>;
}

export { BoothUpdateManyWithoutExhibitorsInput as BoothUpdateManyWithoutExhibitorsInput };