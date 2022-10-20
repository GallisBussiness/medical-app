import { Module } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Etudiant, EtudiantSchema } from './entities/etudiant.entity';
import { FormationModule } from 'src/formation/formation.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + '-' + file.originalname.split('.')[0] + '.' + file.mimetype.split('/')[1],
    );
  },
});

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Etudiant.name,useFactory: () => {
        const schema = EtudiantSchema;
        schema.plugin(require('mongoose-autopopulate'));
        return schema;
      }, },
    ]),
    FormationModule,
    MulterModule.register({
      storage,
    }),
  ],
  controllers: [EtudiantController],
  providers: [EtudiantService],
})
export class EtudiantModule {}
