import { Model } from 'mongoose';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
import { Doc, DocDocument } from './entities/doc.entity';
export declare class DocService {
    private DocModel;
    constructor(DocModel: Model<DocDocument>);
    create(createDocDto: CreateDocDto): Promise<Doc>;
    findAll(): Promise<Doc[]>;
    findOne(id: string): Promise<Doc>;
    findByDossier(id: string): Promise<Doc[]>;
    update(id: string, updateDocDto: UpdateDocDto): Promise<Doc>;
    remove(id: string): Promise<Doc>;
}
