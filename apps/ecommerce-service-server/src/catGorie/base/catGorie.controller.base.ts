/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CatGorieService } from "../catGorie.service";
import { CatGorieCreateInput } from "./CatGorieCreateInput";
import { CatGorie } from "./CatGorie";
import { CatGorieFindManyArgs } from "./CatGorieFindManyArgs";
import { CatGorieWhereUniqueInput } from "./CatGorieWhereUniqueInput";
import { CatGorieUpdateInput } from "./CatGorieUpdateInput";

export class CatGorieControllerBase {
  constructor(protected readonly service: CatGorieService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CatGorie })
  async createCatGorie(
    @common.Body() data: CatGorieCreateInput
  ): Promise<CatGorie> {
    return await this.service.createCatGorie({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CatGorie] })
  @ApiNestedQuery(CatGorieFindManyArgs)
  async catGories(@common.Req() request: Request): Promise<CatGorie[]> {
    const args = plainToClass(CatGorieFindManyArgs, request.query);
    return this.service.catGories({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CatGorie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async catGorie(
    @common.Param() params: CatGorieWhereUniqueInput
  ): Promise<CatGorie | null> {
    const result = await this.service.catGorie({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CatGorie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCatGorie(
    @common.Param() params: CatGorieWhereUniqueInput,
    @common.Body() data: CatGorieUpdateInput
  ): Promise<CatGorie | null> {
    try {
      return await this.service.updateCatGorie({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CatGorie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCatGorie(
    @common.Param() params: CatGorieWhereUniqueInput
  ): Promise<CatGorie | null> {
    try {
      return await this.service.deleteCatGorie({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}