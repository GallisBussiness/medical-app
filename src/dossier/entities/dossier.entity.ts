import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { Etudiant } from 'src/etudiant/entities/etudiant.entity';

export type DossierDocument = Dossier & Document;
@Schema({ timestamps: true })
export class Dossier {
  @Prop({ type: String })
  groupe_sanguin: string;

  @Prop({ type: String })
  poids: string;

  @Prop({ type: String })
  taille: string;

  @Prop({ type: String })
  handicap_particulier: string;

  @Prop({ type: String })
  maladie_chronique: string;

  @Prop({ type: String })
  allergies: string;

  @Prop({ type: String })
  antecedants_medicaux: string;

  @Prop({ type: Types.ObjectId, required: true, ref: Etudiant.name, autopopulate: true })
  @Type(() => Etudiant)
  etudiant: Etudiant

  // @Prop({ type: [{type: String}], default: []})
  // files: string[];
 }

export const DossierSchema = SchemaFactory.createForClass(Dossier);
