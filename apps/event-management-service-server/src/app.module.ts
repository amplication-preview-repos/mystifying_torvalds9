import { RedisModule } from "./redis/redis.module";
import { Module } from "@nestjs/common";
import { SponsorModule } from "./sponsor/sponsor.module";
import { ExhibitorModule } from "./exhibitor/exhibitor.module";
import { EventModule } from "./event/event.module";
import { BoothModule } from "./booth/booth.module";
import { AttendeeModule } from "./attendee/attendee.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ACLModule,
    AuthModule,
    LoggerModule,
    SponsorModule,
    ExhibitorModule,
    EventModule,
    BoothModule,
    AttendeeModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
