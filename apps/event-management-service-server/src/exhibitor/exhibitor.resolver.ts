import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExhibitorResolverBase } from "./base/exhibitor.resolver.base";
import { Exhibitor } from "./base/Exhibitor";
import { ExhibitorService } from "./exhibitor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Exhibitor)
export class ExhibitorResolver extends ExhibitorResolverBase {
  constructor(
    protected readonly service: ExhibitorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
