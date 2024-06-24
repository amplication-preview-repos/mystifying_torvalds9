import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExhibitorServiceBase } from "./base/exhibitor.service.base";

@Injectable()
export class ExhibitorService extends ExhibitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
