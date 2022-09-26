import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TraitementDocument = Traitement & Document;

@Schema({timestamps: true})
export class Traitement {
    @Prop({type: String, required: true})
    medicament: string;

    @Prop({ type: Number, required: true})
    nombre: number;

    @Prop({type: String, required: true})
    frequence: string;
}

export const TraitementSchema = SchemaFactory.createForClass(Traitement);
