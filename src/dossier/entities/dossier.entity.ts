import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Etudiant } from 'src/etudiant/entities/etudiant.entity';

export type DossierDocument = Dossier & Document;
@Schema({ timestamps: true })
export class Dossier {
  @Prop({ type: String })
  groupe_sanguin: string;

  @Prop({ type: Number })
  poids: number;

  @Prop({ type: String })
  handicap_particuler: string;

  @Prop({ type: String })
  maladie_chronique: string;

  @Prop({ type: String })
  allergies: string;

  @Prop({ type: String })
  antecedant_medicaux: string;

  @Prop({ type: Types.ObjectId, required: true, ref: Etudiant.name })
  etudiant: Etudiant;
}

export const DossierSchema = SchemaFactory.createForClass(Dossier);
