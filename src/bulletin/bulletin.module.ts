import { Module } from '@nestjs/common';
import { BulletinService } from './bulletin.service';
import { BulletinController } from './bulletin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bulletin, BulletinSchema } from './entities/bulletin.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{name: Bulletin.name,useFactory: () => {
      const schema = BulletinSchema;
      schema.plugin(require('mongoose-autopopulate'));
      schema.plugin(require('mongoose-serial'), { field:"numero"});
      return schema;
    },}])
  ],
  controllers: [BulletinController],
  providers: [BulletinService]
})
export class BulletinModule {}
