import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Formation } from 'src/formation/entities/formation.entity';

export type EtudiantDocument = Etudiant & Document;

@Schema({ timestamps: true })
export class Etudiant {
  @Prop({ type: String, required: true, unique: true })
  nce: string;

  @Prop({ type: String, required: true })
  prenom: string;

  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: String, required: true })
  sexe: string;

  @Prop({ type: String, required: true })
  dateDeNaissance: string;

  @Prop({ type: String, required: true })
  lieuDeNaissance: string;

  @Prop({ type: String, required: true })
  adresse: string;

  @Prop({ type: String })
  telephone: string;

  @Prop({ type: Types.ObjectId, ref: Formation.name })
  formation: Formation;
}

export const EtudiantSchema = SchemaFactory.createForClass(Etudiant);
