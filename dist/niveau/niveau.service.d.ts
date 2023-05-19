import { Model } from 'mongoose';
import { CreateNiveauDto } from './dto/create-niveau.dto';
import { UpdateNiveauDto } from './dto/update-niveau.dto';
import { Niveau, NiveauDocument } from './entities/niveau.entity';
export declare class NiveauService {
    private niveauModel;
    constructor(niveauModel: Model<NiveauDocument>);
    create(createNiveauDto: CreateNiveauDto): Promise<Niveau>;
    findAll(): Promise<Niveau[]>;
    findOne(id: string): Promise<Niveau>;
    update(id: string, updateNiveauDto: UpdateNiveauDto): Promise<Niveau>;
    remove(id: string): Promise<Niveau>;
}
