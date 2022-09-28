import { Module } from '@nestjs/common';
import { BulletinService } from './bulletin.service';
import { BulletinController } from './bulletin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bulletin, BulletinSchema } from './entities/bulletin.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Bulletin.name, schema: BulletinSchema}])],
  controllers: [BulletinController],
  providers: [BulletinService]
})
export class BulletinModule {}
