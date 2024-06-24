import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BoothModuleBase } from "./base/booth.module.base";
import { BoothService } from "./booth.service";
import { BoothController } from "./booth.controller";
import { BoothResolver } from "./booth.resolver";

@Module({
  imports: [BoothModuleBase, forwardRef(() => AuthModule)],
  controllers: [BoothController],
  providers: [BoothService, BoothResolver],
  exports: [BoothService],
})
export class BoothModule {}
