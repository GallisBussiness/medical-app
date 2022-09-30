import { Module } from '@nestjs/common';
import { BulletinService } from './bulletin.service';
import { BulletinController } from './bulletin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bulletin, BulletinSchema } from './entities/bulletin.entity';
import { FormationModule } from 'src/formation/formation.module';
import { UfrModule } from 'src/ufr/ufr.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Bulletin.name, schema: BulletinSchema}]),
    FormationModule,
    UfrModule
  ],
  controllers: [BulletinController],
  providers: [BulletinService]
})
export class BulletinModule {}
