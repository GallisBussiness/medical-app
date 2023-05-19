import { CreateTraitementDto } from './dto/create-traitement.dto';
import { UpdateTraitementDto } from './dto/update-traitement.dto';
export declare class TraitementService {
    create(createTraitementDto: CreateTraitementDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTraitementDto: UpdateTraitementDto): string;
    remove(id: number): string;
}
