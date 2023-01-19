import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Dossier } from 'src/dossier/entities/dossier.entity';
import { User } from 'src/user/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export type BulletinDocument = Bulletin & Document;

@Schema({ timestamps: true })
export class Bulletin {
  @Prop({ type: String, required: true })
  examensDemandes: string;

  @Prop({ type: String, required: true })
  service: string;

  @Prop({ type: String, required: true})
  etablissement: string;

  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: String, required: true, default: uuidv4() })
  code: string;

  @Prop({ type: Types.ObjectId, required: true, ref: Dossier.name, autopopulate: true })
  dossier: Dossier;

  @Prop({ type: Types.ObjectId, required: true, ref: User.name, autopopulate:true })
  user: User;
}

export const BulletinSchema = SchemaFactory.createForClass(Bulletin);
