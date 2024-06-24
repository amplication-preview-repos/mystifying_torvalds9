/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Sponsor as PrismaSponsor,
  Event as PrismaEvent,
} from "@prisma/client";

export class SponsorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SponsorCountArgs, "select">): Promise<number> {
    return this.prisma.sponsor.count(args);
  }

  async sponsors(args: Prisma.SponsorFindManyArgs): Promise<PrismaSponsor[]> {
    return this.prisma.sponsor.findMany(args);
  }
  async sponsor(
    args: Prisma.SponsorFindUniqueArgs
  ): Promise<PrismaSponsor | null> {
    return this.prisma.sponsor.findUnique(args);
  }
  async createSponsor(args: Prisma.SponsorCreateArgs): Promise<PrismaSponsor> {
    return this.prisma.sponsor.create(args);
  }
  async updateSponsor(args: Prisma.SponsorUpdateArgs): Promise<PrismaSponsor> {
    return this.prisma.sponsor.update(args);
  }
  async deleteSponsor(args: Prisma.SponsorDeleteArgs): Promise<PrismaSponsor> {
    return this.prisma.sponsor.delete(args);
  }

  async getEvent(parentId: string): Promise<PrismaEvent | null> {
    return this.prisma.sponsor
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }
}