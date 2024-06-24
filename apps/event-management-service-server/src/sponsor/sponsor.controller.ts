import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SponsorService } from "./sponsor.service";
import { SponsorControllerBase } from "./base/sponsor.controller.base";

@swagger.ApiTags("sponsors")
@common.Controller("sponsors")
export class SponsorController extends SponsorControllerBase {
  constructor(
    protected readonly service: SponsorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
