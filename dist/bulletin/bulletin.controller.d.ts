import { BulletinService } from './bulletin.service';
import { CreateBulletinDto } from './dto/create-bulletin.dto';
import { UpdateBulletinDto } from './dto/update-bulletin.dto';
export declare class BulletinController {
    private readonly bulletinService;
    constructor(bulletinService: BulletinService);
    create(createBulletinDto: CreateBulletinDto): Promise<import("./entities/bulletin.entity").Bulletin>;
    findAll(): Promise<import("./entities/bulletin.entity").Bulletin[]>;
    findByEtudiant(id: string): Promise<import("./entities/bulletin.entity").Bulletin[]>;
    findOne(id: string): Promise<import("./entities/bulletin.entity").Bulletin>;
    update(id: string, updateBulletinDto: UpdateBulletinDto): Promise<import("./entities/bulletin.entity").Bulletin>;
    remove(id: string): Promise<import("./entities/bulletin.entity").Bulletin>;
}
