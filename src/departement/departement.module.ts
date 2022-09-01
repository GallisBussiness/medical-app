import { Module } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { DepartementController } from './departement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Departement, DepartementSchema } from './entities/departement.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Departement.name, schema: DepartementSchema },
    ]),
  ],
  controllers: [DepartementController],
  providers: [DepartementService],
})
export class DepartementModule {}
