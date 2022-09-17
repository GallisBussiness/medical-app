import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UfrModule } from './ufr/ufr.module';
import { UserModule } from './user/user.module';
import { FormationModule } from './formation/formation.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { EtablissementModule } from './etablissement/etablissement.module';
import { DepartementModule } from './departement/departement.module';
import { ConsultationModule } from './consultation/consultation.module';
import { BulletinModule } from './bulletin/bulletin.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthMiddleware } from './auth/auth.middleware';
import { NiveauModule } from './niveau/niveau.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
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
    UfrModule,
    UserModule,
    FormationModule,
    PrescriptionModule,
    EtudiantModule,
    EtablissementModule,
    DepartementModule,
    ConsultationModule,
    BulletinModule,
    NiveauModule,
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
