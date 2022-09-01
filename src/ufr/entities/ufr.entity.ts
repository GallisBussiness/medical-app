import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UfrDocument = Ufr & Document;

@Schema({ timestamps: true })
export class Ufr {
  @Prop({ type: String, required: true, unique: true })
  nom: string;

  @Prop({ type: String, required: true, unique: true })
  pseudo: string;
}

export const UfrSchema = SchemaFactory.createForClass(Ufr);
