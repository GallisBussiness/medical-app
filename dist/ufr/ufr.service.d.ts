import { Model } from 'mongoose';
import { CreateUfrDto } from './dto/create-ufr.dto';
import { UpdateUfrDto } from './dto/update-ufr.dto';
import { Ufr, UfrDocument } from './entities/ufr.entity';
export declare class UfrService {
    private ufrModel;
    constructor(ufrModel: Model<UfrDocument>);
    create(createUfrDto: CreateUfrDto): Promise<Ufr>;
    findAll(): Promise<Ufr[]>;
    findOne(id: string): Promise<Ufr>;
    update(id: string, updateUfrDto: UpdateUfrDto): Promise<Ufr>;
    remove(id: string): Promise<Ufr>;
}
