import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatGorieServiceBase } from "./base/catGorie.service.base";

@Injectable()
export class CatGorieService extends CatGorieServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
