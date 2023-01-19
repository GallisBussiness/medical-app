import { Model } from 'mongoose';
import { CreateEtablissementDto } from './dto/create-etablissement.dto';
import { UpdateEtablissementDto } from './dto/update-etablissement.dto';
import { Etablissement, EtablissementDocument } from './entities/etablissement.entity';
export declare class EtablissementService {
    private etablissementModel;
    constructor(etablissementModel: Model<EtablissementDocument>);
    create(createEtablissementDto: CreateEtablissementDto): Promise<Etablissement>;
    findAll(): Promise<Etablissement[]>;
    findOne(id: string): Promise<Etablissement>;
    update(id: string, updateEtablissementDto: UpdateEtablissementDto): Promise<Etablissement>;
    remove(id: string): Promise<Etablissement>;
}
