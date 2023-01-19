import { Model } from 'mongoose';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation, FormationDocument } from './entities/formation.entity';
export declare class FormationService {
    private formationModel;
    constructor(formationModel: Model<FormationDocument>);
    create(createFormationDto: CreateFormationDto): Promise<Formation>;
    findAll(): Promise<Formation[]>;
    findOne(id: string): Promise<Formation>;
    update(id: string, updateFormationDto: UpdateFormationDto): Promise<Formation>;
    remove(id: string): Promise<Formation>;
}
