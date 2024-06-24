import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SponsorModuleBase } from "./base/sponsor.module.base";
import { SponsorService } from "./sponsor.service";
import { SponsorController } from "./sponsor.controller";
import { SponsorResolver } from "./sponsor.resolver";

@Module({
  imports: [SponsorModuleBase, forwardRef(() => AuthModule)],
  controllers: [SponsorController],
  providers: [SponsorService, SponsorResolver],
  exports: [SponsorService],
})
export class SponsorModule {}
