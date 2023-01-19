import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
export declare class ConsultationController {
    private readonly consultationService;
    constructor(consultationService: ConsultationService);
    create(createConsultationDto: CreateConsultationDto): Promise<import("./entities/consultation.entity").Consultation>;
    findAll(): Promise<import("./entities/consultation.entity").Consultation[]>;
    findByEtudiant(id: string): Promise<import("./entities/consultation.entity").Consultation[]>;
    findOne(id: string): Promise<import("./entities/consultation.entity").Consultation>;
    update(id: string, updateConsultationDto: UpdateConsultationDto): Promise<import("./entities/consultation.entity").Consultation>;
    remove(id: string): Promise<import("./entities/consultation.entity").Consultation>;
}
