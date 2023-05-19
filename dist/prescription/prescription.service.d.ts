import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
export declare class PrescriptionService {
    create(createPrescriptionDto: CreatePrescriptionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePrescriptionDto: UpdatePrescriptionDto): string;
    remove(id: number): string;
}
