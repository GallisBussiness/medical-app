import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DossierDocument = Dossier & Document;
@Schema({ timestamps: true })
export class Dossier {
  @Prop({ type: String })
  groupe_sanguin: string;

  @Prop({ type: Number })
  poids: number;

  @Prop({ type: String })
  handicap_particulier: string;

  @Prop({ type: String })
  maladie_chronique: string;

  @Prop({ type: String })
  allergies: string;

  @Prop({ type: String })
  antecedant_medicaux: string;
 }

export const DossierSchema = SchemaFactory.createForClass(Dossier);
