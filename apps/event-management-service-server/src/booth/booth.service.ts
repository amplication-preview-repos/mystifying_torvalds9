import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoothServiceBase } from "./base/booth.service.base";

@Injectable()
export class BoothService extends BoothServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
