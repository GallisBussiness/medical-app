import { NiveauService } from './niveau.service';
import { CreateNiveauDto } from './dto/create-niveau.dto';
import { UpdateNiveauDto } from './dto/update-niveau.dto';
export declare class NiveauController {
    private readonly niveauService;
    constructor(niveauService: NiveauService);
    create(createNiveauDto: CreateNiveauDto): Promise<import("./entities/niveau.entity").Niveau>;
    findAll(): Promise<import("./entities/niveau.entity").Niveau[]>;
    findOne(id: string): Promise<import("./entities/niveau.entity").Niveau>;
    update(id: string, updateNiveauDto: UpdateNiveauDto): Promise<import("./entities/niveau.entity").Niveau>;
    remove(id: string): Promise<import("./entities/niveau.entity").Niveau>;
}
