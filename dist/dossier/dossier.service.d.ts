import { Model } from 'mongoose';
import { CreateDossierDto } from './dto/create-dossier.dto';
import { UpdateDossierDto } from './dto/update-dossier.dto';
import { Dossier, DossierDocument } from './entities/dossier.entity';
export declare class DossierService {
    private dossierModel;
    constructor(dossierModel: Model<DossierDocument>);
    create(createDossierDto: CreateDossierDto): Promise<Dossier>;
    findAll(): Promise<Dossier[]>;
    findOne(id: string): Promise<Dossier>;
    findByEtudiant(id: string): Promise<Dossier>;
    update(id: string, updateDossierDto: UpdateDossierDto): Promise<Dossier>;
    remove(id: string): Promise<Dossier>;
}
