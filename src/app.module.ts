import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { ConsultationModule } from './consultation/consultation.module';
import { BulletinModule } from './bulletin/bulletin.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthMiddleware } from './auth/auth.middleware';
import { DossierModule } from './dossier/dossier.module';
import { DocModule } from './doc/doc.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
        autoCreate: true,
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '24h' },
        };
      },
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot(),
    UserModule,
    EtudiantModule,
    ConsultationModule,
    BulletinModule,
    DossierModule,
    DocModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
