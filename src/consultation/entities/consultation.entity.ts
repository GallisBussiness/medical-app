import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Etudiant } from 'src/etudiant/entities/etudiant.entity';
import { User } from 'src/user/entities/user.entity';

export type ConsultationDocument = Consultation & Document;

@Schema({ timestamps: true })
export class Consultation {
  @Prop({ type: String, required: true })
  dateDeConsultation: string;

  @Prop({ type: Number })
  poids: number;

  @Prop({ type: String })
  tension: string;

  @Prop({ type: String })
  temperature: string;

  @Prop({ type: String })
  poule: string;

  @Prop({ type: String })
  glycemie: string;

  @Prop({ type: String })
  corps_cetonique: string;

  @Prop({ type: String })
  autres: string;

  @Prop({ type: String })
  examen: string;

  @Prop({ type: String })
  traitement: string;

  @Prop({ type: String })
  bilan: string;

  @Prop({ type: String })
  prochain_rv: string;

  @Prop({ type: String })
  reference: string;

  @Prop({ type: String })
  plainte_du_jour: string;

  @Prop({ type: String })
  type: string;

  @Prop({ type: Number })
  numero: string;

  @Prop({ type: Types.ObjectId, required: true, ref: Etudiant.name })
  etudiant: Etudiant;

  @Prop({ type: Types.ObjectId, required: true, ref: User.name })
  user: User;
}

export const ConsultationSchema = SchemaFactory.createForClass(Consultation);
