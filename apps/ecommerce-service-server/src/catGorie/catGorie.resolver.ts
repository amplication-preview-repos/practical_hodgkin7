import * as graphql from "@nestjs/graphql";
import { CatGorieResolverBase } from "./base/catGorie.resolver.base";
import { CatGorie } from "./base/CatGorie";
import { CatGorieService } from "./catGorie.service";

@graphql.Resolver(() => CatGorie)
export class CatGorieResolver extends CatGorieResolverBase {
  constructor(protected readonly service: CatGorieService) {
    super(service);
  }
}
