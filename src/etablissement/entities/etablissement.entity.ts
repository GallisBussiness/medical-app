import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type EtablissementDocument = Etablissement & Document;

@Schema({ timestamps: true })
export class Etablissement {
  @Prop({ type: String, required: true, unique: true })
  nom: string;

  @Prop({ type: String, required: true })
  pseudo: string;
}

export const EtablissementSchema = SchemaFactory.createForClass(Etablissement);
