/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Booth } from "./Booth";
import { BoothCountArgs } from "./BoothCountArgs";
import { BoothFindManyArgs } from "./BoothFindManyArgs";
import { BoothFindUniqueArgs } from "./BoothFindUniqueArgs";
import { CreateBoothArgs } from "./CreateBoothArgs";
import { UpdateBoothArgs } from "./UpdateBoothArgs";
import { DeleteBoothArgs } from "./DeleteBoothArgs";
import { ExhibitorFindManyArgs } from "../../exhibitor/base/ExhibitorFindManyArgs";
import { Exhibitor } from "../../exhibitor/base/Exhibitor";
import { Event } from "../../event/base/Event";
import { BoothService } from "../booth.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Booth)
export class BoothResolverBase {
  constructor(
    protected readonly service: BoothService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "read",
    possession: "any",
  })
  async _boothsMeta(
    @graphql.Args() args: BoothCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Booth])
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "read",
    possession: "any",
  })
  async booths(@graphql.Args() args: BoothFindManyArgs): Promise<Booth[]> {
    return this.service.booths(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Booth, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "read",
    possession: "own",
  })
  async booth(
    @graphql.Args() args: BoothFindUniqueArgs
  ): Promise<Booth | null> {
    const result = await this.service.booth(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Booth)
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "create",
    possession: "any",
  })
  async createBooth(@graphql.Args() args: CreateBoothArgs): Promise<Booth> {
    return await this.service.createBooth({
      ...args,
      data: {
        ...args.data,

        event: args.data.event
          ? {
              connect: args.data.event,
            }
          : undefined,

        exhibitor: args.data.exhibitor
          ? {
              connect: args.data.exhibitor,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Booth)
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "update",
    possession: "any",
  })
  async updateBooth(
    @graphql.Args() args: UpdateBoothArgs
  ): Promise<Booth | null> {
    try {
      return await this.service.updateBooth({
        ...args,
        data: {
          ...args.data,

          event: args.data.event
            ? {
                connect: args.data.event,
              }
            : undefined,

          exhibitor: args.data.exhibitor
            ? {
                connect: args.data.exhibitor,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Booth)
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "delete",
    possession: "any",
  })
  async deleteBooth(
    @graphql.Args() args: DeleteBoothArgs
  ): Promise<Booth | null> {
    try {
      return await this.service.deleteBooth(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Exhibitor], { name: "exhibitors" })
  @nestAccessControl.UseRoles({
    resource: "Exhibitor",
    action: "read",
    possession: "any",
  })
  async findExhibitors(
    @graphql.Parent() parent: Booth,
    @graphql.Args() args: ExhibitorFindManyArgs
  ): Promise<Exhibitor[]> {
    const results = await this.service.findExhibitors(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Event, {
    nullable: true,
    name: "event",
  })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async getEvent(@graphql.Parent() parent: Booth): Promise<Event | null> {
    const result = await this.service.getEvent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Exhibitor, {
    nullable: true,
    name: "exhibitor",
  })
  @nestAccessControl.UseRoles({
    resource: "Exhibitor",
    action: "read",
    possession: "any",
  })
  async getExhibitor(
    @graphql.Parent() parent: Booth
  ): Promise<Exhibitor | null> {
    const result = await this.service.getExhibitor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
