import { Module } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Etudiant, EtudiantSchema } from './entities/etudiant.entity';
import { FormationModule } from 'src/formation/formation.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Etudiant.name, schema: EtudiantSchema },
    ]),
    FormationModule
  ],
  controllers: [EtudiantController],
  providers: [EtudiantService],
})
export class EtudiantModule {}
