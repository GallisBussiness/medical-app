import { Model } from 'mongoose';
import { CreateBulletinDto } from './dto/create-bulletin.dto';
import { UpdateBulletinDto } from './dto/update-bulletin.dto';
import { Bulletin, BulletinDocument } from './entities/bulletin.entity';
export declare class BulletinService {
    private bulletinModel;
    constructor(bulletinModel: Model<BulletinDocument>);
    create(createBulletinDto: CreateBulletinDto): Promise<Bulletin>;
    findAll(): Promise<Bulletin[]>;
    findByDossier(id: string): Promise<Bulletin[]>;
    findOne(id: string): Promise<Bulletin>;
    update(id: string, updateBulletinDto: UpdateBulletinDto): Promise<Bulletin>;
    remove(id: string): Promise<Bulletin>;
}
