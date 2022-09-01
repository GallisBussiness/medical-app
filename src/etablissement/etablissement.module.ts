import { Module } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { EtablissementController } from './etablissement.controller';
import {
  Etablissement,
  EtablissementSchema,
} from './entities/etablissement.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Etablissement.name, schema: EtablissementSchema },
    ]),
  ],
  controllers: [EtablissementController],
  providers: [EtablissementService],
})
export class EtablissementModule {}
