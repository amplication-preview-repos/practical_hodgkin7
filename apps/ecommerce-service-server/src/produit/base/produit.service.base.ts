/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Produit as PrismaProduit } from "@prisma/client";

export class ProduitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProduitCountArgs, "select">): Promise<number> {
    return this.prisma.produit.count(args);
  }

  async produits<T extends Prisma.ProduitFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduitFindManyArgs>
  ): Promise<PrismaProduit[]> {
    return this.prisma.produit.findMany<Prisma.ProduitFindManyArgs>(args);
  }
  async produit<T extends Prisma.ProduitFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduitFindUniqueArgs>
  ): Promise<PrismaProduit | null> {
    return this.prisma.produit.findUnique(args);
  }
  async createProduit<T extends Prisma.ProduitCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduitCreateArgs>
  ): Promise<PrismaProduit> {
    return this.prisma.produit.create<T>(args);
  }
  async updateProduit<T extends Prisma.ProduitUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduitUpdateArgs>
  ): Promise<PrismaProduit> {
    return this.prisma.produit.update<T>(args);
  }
  async deleteProduit<T extends Prisma.ProduitDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProduitDeleteArgs>
  ): Promise<PrismaProduit> {
    return this.prisma.produit.delete(args);
  }
}