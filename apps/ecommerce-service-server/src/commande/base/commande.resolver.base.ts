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
import { Commande } from "./Commande";
import { CommandeCountArgs } from "./CommandeCountArgs";
import { CommandeFindManyArgs } from "./CommandeFindManyArgs";
import { CommandeFindUniqueArgs } from "./CommandeFindUniqueArgs";
import { DeleteCommandeArgs } from "./DeleteCommandeArgs";
import { CommandeService } from "../commande.service";
@graphql.Resolver(() => Commande)
export class CommandeResolverBase {
  constructor(protected readonly service: CommandeService) {}

  async _commandesMeta(
    @graphql.Args() args: CommandeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Commande])
  async commandes(
    @graphql.Args() args: CommandeFindManyArgs
  ): Promise<Commande[]> {
    return this.service.commandes(args);
  }

  @graphql.Query(() => Commande, { nullable: true })
  async commande(
    @graphql.Args() args: CommandeFindUniqueArgs
  ): Promise<Commande | null> {
    const result = await this.service.commande(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Commande)
  async deleteCommande(
    @graphql.Args() args: DeleteCommandeArgs
  ): Promise<Commande | null> {
    try {
      return await this.service.deleteCommande(args);
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
