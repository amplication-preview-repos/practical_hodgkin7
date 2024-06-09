import * as graphql from "@nestjs/graphql";
import { ProduitResolverBase } from "./base/produit.resolver.base";
import { Produit } from "./base/Produit";
import { ProduitService } from "./produit.service";

@graphql.Resolver(() => Produit)
export class ProduitResolver extends ProduitResolverBase {
  constructor(protected readonly service: ProduitService) {
    super(service);
  }
}
