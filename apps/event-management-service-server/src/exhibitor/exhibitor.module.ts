import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExhibitorModuleBase } from "./base/exhibitor.module.base";
import { ExhibitorService } from "./exhibitor.service";
import { ExhibitorController } from "./exhibitor.controller";
import { ExhibitorResolver } from "./exhibitor.resolver";

@Module({
  imports: [ExhibitorModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExhibitorController],
  providers: [ExhibitorService, ExhibitorResolver],
  exports: [ExhibitorService],
})
export class ExhibitorModule {}
