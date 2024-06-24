/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BoothService } from "../booth.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BoothCreateInput } from "./BoothCreateInput";
import { Booth } from "./Booth";
import { BoothFindManyArgs } from "./BoothFindManyArgs";
import { BoothWhereUniqueInput } from "./BoothWhereUniqueInput";
import { BoothUpdateInput } from "./BoothUpdateInput";
import { ExhibitorFindManyArgs } from "../../exhibitor/base/ExhibitorFindManyArgs";
import { Exhibitor } from "../../exhibitor/base/Exhibitor";
import { ExhibitorWhereUniqueInput } from "../../exhibitor/base/ExhibitorWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BoothControllerBase {
  constructor(
    protected readonly service: BoothService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Booth })
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBooth(@common.Body() data: BoothCreateInput): Promise<Booth> {
    return await this.service.createBooth({
      data: {
        ...data,

        event: data.event
          ? {
              connect: data.event,
            }
          : undefined,

        exhibitor: data.exhibitor
          ? {
              connect: data.exhibitor,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,

        event: {
          select: {
            id: true,
          },
        },

        exhibitor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Booth] })
  @ApiNestedQuery(BoothFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async booths(@common.Req() request: Request): Promise<Booth[]> {
    const args = plainToClass(BoothFindManyArgs, request.query);
    return this.service.booths({
      ...args,
      select: {
        createdAt: true,
        description: true,

        event: {
          select: {
            id: true,
          },
        },

        exhibitor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Booth })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async booth(
    @common.Param() params: BoothWhereUniqueInput
  ): Promise<Booth | null> {
    const result = await this.service.booth({
      where: params,
      select: {
        createdAt: true,
        description: true,

        event: {
          select: {
            id: true,
          },
        },

        exhibitor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Booth })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBooth(
    @common.Param() params: BoothWhereUniqueInput,
    @common.Body() data: BoothUpdateInput
  ): Promise<Booth | null> {
    try {
      return await this.service.updateBooth({
        where: params,
        data: {
          ...data,

          event: data.event
            ? {
                connect: data.event,
              }
            : undefined,

          exhibitor: data.exhibitor
            ? {
                connect: data.exhibitor,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,

          event: {
            select: {
              id: true,
            },
          },

          exhibitor: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Booth })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBooth(
    @common.Param() params: BoothWhereUniqueInput
  ): Promise<Booth | null> {
    try {
      return await this.service.deleteBooth({
        where: params,
        select: {
          createdAt: true,
          description: true,

          event: {
            select: {
              id: true,
            },
          },

          exhibitor: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/exhibitors")
  @ApiNestedQuery(ExhibitorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Exhibitor",
    action: "read",
    possession: "any",
  })
  async findExhibitors(
    @common.Req() request: Request,
    @common.Param() params: BoothWhereUniqueInput
  ): Promise<Exhibitor[]> {
    const query = plainToClass(ExhibitorFindManyArgs, request.query);
    const results = await this.service.findExhibitors(params.id, {
      ...query,
      select: {
        booth: {
          select: {
            id: true,
          },
        },

        company: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/exhibitors")
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "update",
    possession: "any",
  })
  async connectExhibitors(
    @common.Param() params: BoothWhereUniqueInput,
    @common.Body() body: ExhibitorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exhibitors: {
        connect: body,
      },
    };
    await this.service.updateBooth({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/exhibitors")
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "update",
    possession: "any",
  })
  async updateExhibitors(
    @common.Param() params: BoothWhereUniqueInput,
    @common.Body() body: ExhibitorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exhibitors: {
        set: body,
      },
    };
    await this.service.updateBooth({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/exhibitors")
  @nestAccessControl.UseRoles({
    resource: "Booth",
    action: "update",
    possession: "any",
  })
  async disconnectExhibitors(
    @common.Param() params: BoothWhereUniqueInput,
    @common.Body() body: ExhibitorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exhibitors: {
        disconnect: body,
      },
    };
    await this.service.updateBooth({
      where: params,
      data,
      select: { id: true },
    });
  }
}
