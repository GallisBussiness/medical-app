import { Module } from '@nestjs/common';
import { UfrService } from './ufr.service';
import { UfrController } from './ufr.controller';
import { Ufr, UfrSchema } from './entities/ufr.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ufr.name, schema: UfrSchema }])],
  controllers: [UfrController],
  providers: [UfrService],
  exports: [UfrService]
})
export class UfrModule {}
