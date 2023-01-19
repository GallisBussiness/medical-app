import { Module } from '@nestjs/common';
import { DossierService } from './dossier.service';
import { DossierController } from './dossier.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dossier, DossierSchema } from './entities/dossier.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: Dossier.name, useFactory: ()=> {
    const schema = DossierSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [DossierController],
  providers: [DossierService]
})
export class DossierModule {}
