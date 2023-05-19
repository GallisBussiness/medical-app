import { PrescriptionService } from './prescription.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
export declare class PrescriptionController {
    private readonly prescriptionService;
    constructor(prescriptionService: PrescriptionService);
    create(createPrescriptionDto: CreatePrescriptionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePrescriptionDto: UpdatePrescriptionDto): string;
    remove(id: string): string;
}
