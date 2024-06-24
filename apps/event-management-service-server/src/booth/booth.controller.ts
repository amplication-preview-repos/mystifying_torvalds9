import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BoothService } from "./booth.service";
import { BoothControllerBase } from "./base/booth.controller.base";

@swagger.ApiTags("booths")
@common.Controller("booths")
export class BoothController extends BoothControllerBase {
  constructor(
    protected readonly service: BoothService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
