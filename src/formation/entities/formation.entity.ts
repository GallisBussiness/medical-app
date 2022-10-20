import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Departement } from 'src/departement/entities/departement.entity';
import { Niveau } from 'src/niveau/entities/niveau.entity';

export type FormationDocument = Formation & Document;

@Schema({ timestamps: true })
export class Formation {

  @Prop({ type: String, required: true, ref: Niveau.name, autopopulate: true })
  niveau: Niveau;

  @Prop({ type: Types.ObjectId,required: true, ref: Departement.name, autopopulate: true })
  departement: Departement;
}

export const FormationSchema = SchemaFactory.createForClass(Formation);
