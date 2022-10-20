import { Module } from '@nestjs/common';
import { BulletinService } from './bulletin.service';
import { BulletinController } from './bulletin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bulletin, BulletinSchema } from './entities/bulletin.entity';
import { FormationModule } from 'src/formation/formation.module';
import { UfrModule } from 'src/ufr/ufr.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{name: Bulletin.name,useFactory: () => {
      const schema = BulletinSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    },}]),
    FormationModule,
    UfrModule
  ],
  controllers: [BulletinController],
  providers: [BulletinService]
})
export class BulletinModule {}
