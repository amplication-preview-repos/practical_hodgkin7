import { Module } from "@nestjs/common";
import { ProduitModuleBase } from "./base/produit.module.base";
import { ProduitService } from "./produit.service";
import { ProduitController } from "./produit.controller";
import { ProduitResolver } from "./produit.resolver";

@Module({
  imports: [ProduitModuleBase],
  controllers: [ProduitController],
  providers: [ProduitService, ProduitResolver],
  exports: [ProduitService],
})
export class ProduitModule {}
