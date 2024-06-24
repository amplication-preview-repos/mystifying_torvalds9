import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExhibitorService } from "./exhibitor.service";
import { ExhibitorControllerBase } from "./base/exhibitor.controller.base";

@swagger.ApiTags("exhibitors")
@common.Controller("exhibitors")
export class ExhibitorController extends ExhibitorControllerBase {
  constructor(
    protected readonly service: ExhibitorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
