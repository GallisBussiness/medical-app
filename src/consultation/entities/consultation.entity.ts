import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { Dossier } from 'src/dossier/entities/dossier.entity';
import { Traitement, TraitementSchema } from 'src/traitement/entities/traitement.entity';
import { User } from 'src/user/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export type ConsultationDocument = Consultation & Document;

@Schema({ timestamps: true })
export class Consultation {
  @Prop({ type: String, required: true })
  dateDeConsultation: string;

  @Prop({ type: String })
  poids: string;

  @Prop({ type: String })
  taille: string;

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
  diagnostique: string;

  @Prop({ type: String })
  examen: string;

  @Prop({ type: String })
  bilan: string;

  @Prop({ type: String })
  prochain_rv: string;

  @Prop({ type: String })
  reference: string;

  @Prop({ type: String, required: true, default: uuidv4() })
  code: string;

  @Prop({ type: String })
  plainte_du_jour: string;

  @Prop({ type: String })
  type: string;


  @Prop({ type: Array, default: [] })
  traitement: any[]

  @Prop({ type: Types.ObjectId, required: true, ref: Dossier.name, autopopulate: true })
  dossier: Dossier;

  @Prop({ type: Types.ObjectId, required: true, ref: User.name, autopopulate: true })
  user: User;
}

export const ConsultationSchema = SchemaFactory.createForClass(Consultation);
