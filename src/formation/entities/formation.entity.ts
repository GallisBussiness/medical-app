import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Departement } from 'src/departement/entities/departement.entity';

export type FormationDocument = Formation & Document;

@Schema({ timestamps: true })
export class Formation {
  @Prop({ type: String, required: true, unique: true })
  nom: string;

  @Prop({ type: String, required: true })
  niveau: string;

  @Prop({ type: Types.ObjectId, ref: Departement.name })
  departement: Departement;
}

export const FormationSchema = SchemaFactory.createForClass(Formation);
