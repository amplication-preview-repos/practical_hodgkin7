/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CatGorie } from "./CatGorie";
import { CatGorieCountArgs } from "./CatGorieCountArgs";
import { CatGorieFindManyArgs } from "./CatGorieFindManyArgs";
import { CatGorieFindUniqueArgs } from "./CatGorieFindUniqueArgs";
import { DeleteCatGorieArgs } from "./DeleteCatGorieArgs";
import { CatGorieService } from "../catGorie.service";
@graphql.Resolver(() => CatGorie)
export class CatGorieResolverBase {
  constructor(protected readonly service: CatGorieService) {}

  async _catGoriesMeta(
    @graphql.Args() args: CatGorieCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CatGorie])
  async catGories(
    @graphql.Args() args: CatGorieFindManyArgs
  ): Promise<CatGorie[]> {
    return this.service.catGories(args);
  }

  @graphql.Query(() => CatGorie, { nullable: true })
  async catGorie(
    @graphql.Args() args: CatGorieFindUniqueArgs
  ): Promise<CatGorie | null> {
    const result = await this.service.catGorie(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CatGorie)
  async deleteCatGorie(
    @graphql.Args() args: DeleteCatGorieArgs
  ): Promise<CatGorie | null> {
    try {
      return await this.service.deleteCatGorie(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}