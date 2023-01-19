import { EtablissementService } from './etablissement.service';
import { CreateEtablissementDto } from './dto/create-etablissement.dto';
import { UpdateEtablissementDto } from './dto/update-etablissement.dto';
export declare class EtablissementController {
    private readonly etablissementService;
    constructor(etablissementService: EtablissementService);
    create(createEtablissementDto: CreateEtablissementDto): Promise<import("./entities/etablissement.entity").Etablissement>;
    findAll(): Promise<import("./entities/etablissement.entity").Etablissement[]>;
    findOne(id: string): Promise<import("./entities/etablissement.entity").Etablissement>;
    update(id: string, updateEtablissementDto: UpdateEtablissementDto): Promise<import("./entities/etablissement.entity").Etablissement>;
    remove(id: string): Promise<import("./entities/etablissement.entity").Etablissement>;
}
