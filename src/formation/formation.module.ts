import { Module } from '@nestjs/common';
import { FormationService } from './formation.service';
import { FormationController } from './formation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Formation, FormationSchema } from './entities/formation.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Formation.name, schema: FormationSchema },
    ]),
  ],
  controllers: [FormationController],
  providers: [FormationService],
  exports: [FormationService]
})
export class FormationModule {}
