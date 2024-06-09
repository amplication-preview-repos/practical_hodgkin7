import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProduitService } from "./produit.service";
import { ProduitControllerBase } from "./base/produit.controller.base";

@swagger.ApiTags("produits")
@common.Controller("produits")
export class ProduitController extends ProduitControllerBase {
  constructor(protected readonly service: ProduitService) {
    super(service);
  }
}
