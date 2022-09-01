import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Ufr } from 'src/ufr/entities/ufr.entity';

export type DepartementDocument = Departement & Document;

@Schema({ timestamps: true })
export class Departement {
  @Prop({ type: String, required: true, unique: true })
  nom: string;

  @Prop({ type: Types.ObjectId, ref: Ufr.name })
  ufr: Ufr;
}

export const DepartementSchema = SchemaFactory.createForClass(Departement);
