import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatGorieService } from "./catGorie.service";
import { CatGorieControllerBase } from "./base/catGorie.controller.base";

@swagger.ApiTags("catGories")
@common.Controller("catGories")
export class CatGorieController extends CatGorieControllerBase {
  constructor(protected readonly service: CatGorieService) {
    super(service);
  }
}
