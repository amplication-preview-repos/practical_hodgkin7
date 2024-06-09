import { Module } from "@nestjs/common";
import { CatGorieModuleBase } from "./base/catGorie.module.base";
import { CatGorieService } from "./catGorie.service";
import { CatGorieController } from "./catGorie.controller";
import { CatGorieResolver } from "./catGorie.resolver";

@Module({
  imports: [CatGorieModuleBase],
  controllers: [CatGorieController],
  providers: [CatGorieService, CatGorieResolver],
  exports: [CatGorieService],
})
export class CatGorieModule {}
