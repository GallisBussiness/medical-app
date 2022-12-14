import { Module } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { ConsultationController } from './consultation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Consultation, ConsultationSchema } from './entities/consultation.entity';
import { FormationModule } from 'src/formation/formation.module';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{name: Consultation.name,useFactory: () => {
      const schema = ConsultationSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    },}]),
    FormationModule
  ],
  controllers: [ConsultationController],
  providers: [ConsultationService]
})
export class ConsultationModule {}
