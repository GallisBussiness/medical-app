import { DossierService } from './dossier.service';
import { CreateDossierDto } from './dto/create-dossier.dto';
import { UpdateDossierDto } from './dto/update-dossier.dto';
export declare class DossierController {
    private readonly dossierService;
    constructor(dossierService: DossierService);
    create(createDossierDto: CreateDossierDto): Promise<import("./entities/dossier.entity").Dossier>;
    findAll(): Promise<import("./entities/dossier.entity").Dossier[]>;
    findOne(id: string): Promise<import("./entities/dossier.entity").Dossier>;
    findByEtudiant(id: string): Promise<import("./entities/dossier.entity").Dossier>;
    update(id: string, updateDossierDto: UpdateDossierDto): Promise<import("./entities/dossier.entity").Dossier>;
    remove(id: string): Promise<import("./entities/dossier.entity").Dossier>;
}
