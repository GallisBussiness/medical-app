import { Model } from 'mongoose';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { Consultation, ConsultationDocument } from './entities/consultation.entity';
export declare class ConsultationService {
    private consultationModel;
    constructor(consultationModel: Model<ConsultationDocument>);
    create(createConsultationDto: CreateConsultationDto): Promise<Consultation>;
    findAll(): Promise<Consultation[]>;
    findByDossier(id: string): Promise<Consultation[]>;
    findOne(id: string): Promise<Consultation>;
    update(id: string, updateConsultationDto: UpdateConsultationDto): Promise<Consultation>;
    remove(id: string): Promise<Consultation>;
}
