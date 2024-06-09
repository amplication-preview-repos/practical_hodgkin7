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
import { CatGorieWhereInput } from "./CatGorieWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CatGorieListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CatGorieWhereInput,
  })
  @ValidateNested()
  @Type(() => CatGorieWhereInput)
  @IsOptional()
  @Field(() => CatGorieWhereInput, {
    nullable: true,
  })
  every?: CatGorieWhereInput;

  @ApiProperty({
    required: false,
    type: () => CatGorieWhereInput,
  })
  @ValidateNested()
  @Type(() => CatGorieWhereInput)
  @IsOptional()
  @Field(() => CatGorieWhereInput, {
    nullable: true,
  })
  some?: CatGorieWhereInput;

  @ApiProperty({
    required: false,
    type: () => CatGorieWhereInput,
  })
  @ValidateNested()
  @Type(() => CatGorieWhereInput)
  @IsOptional()
  @Field(() => CatGorieWhereInput, {
    nullable: true,
  })
  none?: CatGorieWhereInput;
}
export { CatGorieListRelationFilter as CatGorieListRelationFilter };
