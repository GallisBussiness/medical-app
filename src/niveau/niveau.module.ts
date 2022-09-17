import { Module } from '@nestjs/common';
import { NiveauService } from './niveau.service';
import { NiveauController } from './niveau.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Niveau, NiveauSchema } from './entities/niveau.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Niveau.name, schema: NiveauSchema }])],
  controllers: [NiveauController],
  providers: [NiveauService]
})
export class NiveauModule {}
