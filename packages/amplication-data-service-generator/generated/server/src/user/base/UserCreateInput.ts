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

import {
  IsString,
  IsJSON,
  IsInt,
  IsDate,
  IsNumber,
  ValidateNested,
  IsOptional,
  IsEnum,
  IsBoolean,
} from "class-validator";

import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserCreateNestedManyWithoutUsersInput } from "./UserCreateNestedManyWithoutUsersInput";
import { OrganizationCreateNestedManyWithoutUsersInput } from "./OrganizationCreateNestedManyWithoutUsersInput";
import { EnumUserInterests } from "./EnumUserInterests";
import { EnumUserPriority } from "./EnumUserPriority";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  bio!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  age!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  birthDate!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  score!: number;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  manager?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  employees?: UserCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OrganizationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OrganizationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  organizations?: OrganizationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    enum: EnumUserInterests,
    isArray: true,
  })
  @IsEnum(EnumUserInterests, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumUserInterests], {
    nullable: true,
  })
  interests?: Array<"programming" | "design">;

  @ApiProperty({
    required: true,
    enum: EnumUserPriority,
  })
  @IsEnum(EnumUserPriority)
  @Field(() => EnumUserPriority)
  priority!: "high" | "medium" | "low";

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isCurious!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  location!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  extendedProperties!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => ProfileWhereUniqueInput, {
    nullable: true,
  })
  profile?: ProfileWhereUniqueInput | null;
}
export { UserCreateInput };
