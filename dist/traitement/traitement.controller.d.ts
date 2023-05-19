import { TraitementService } from './traitement.service';
import { CreateTraitementDto } from './dto/create-traitement.dto';
import { UpdateTraitementDto } from './dto/update-traitement.dto';
export declare class TraitementController {
    private readonly traitementService;
    constructor(traitementService: TraitementService);
    create(createTraitementDto: CreateTraitementDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTraitementDto: UpdateTraitementDto): string;
    remove(id: string): string;
}
