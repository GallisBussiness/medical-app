/// <reference types="multer" />
import { DocService } from './doc.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
export declare class DocController {
    private readonly docService;
    constructor(docService: DocService);
    create(file: Express.Multer.File, createDocDto: CreateDocDto): Promise<import("./entities/doc.entity").Doc>;
    findAll(): Promise<import("./entities/doc.entity").Doc[]>;
    findByDossier(id: string): Promise<import("./entities/doc.entity").Doc[]>;
    findOne(id: string): Promise<import("./entities/doc.entity").Doc>;
    update(file: Express.Multer.File, id: string, updateDocDto: UpdateDocDto): Promise<import("./entities/doc.entity").Doc>;
    remove(id: string): Promise<import("./entities/doc.entity").Doc>;
}
