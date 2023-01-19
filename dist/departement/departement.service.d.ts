import { Model } from 'mongoose';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Departement, DepartementDocument } from './entities/departement.entity';
export declare class DepartementService {
    private departementModel;
    constructor(departementModel: Model<DepartementDocument>);
    create(createDepartementDto: CreateDepartementDto): Promise<Departement>;
    findAll(): Promise<Departement[]>;
    findOne(id: string): Promise<Departement>;
    update(id: string, updateDepartementDto: UpdateDepartementDto): Promise<Departement>;
    remove(id: string): Promise<Departement>;
}
