import { Injectable,HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { Consultation, ConsultationDocument } from './entities/consultation.entity';

@Injectable()
export class ConsultationService {
  constructor(@InjectModel(Consultation.name) private consultationModel: Model<ConsultationDocument>) {}
  async create(createConsultationDto: CreateConsultationDto): Promise<Consultation> {
    try {
      const createdConsultation = new this.consultationModel(createConsultationDto);
      return await createdConsultation.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Consultation[]> {
    try {
      return await this.consultationModel.find().sort({ createdAt: -1 });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findByDossier(id: string): Promise<Consultation[]> {
    try {
      return await this.consultationModel.find({dossier: id}).sort({ createdAt: -1 });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Consultation> {
    try {
      return await this.consultationModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateConsultationDto: UpdateConsultationDto): Promise<Consultation> {
    try {
      return await this.consultationModel.findByIdAndUpdate(id, updateConsultationDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Consultation> {
    try {
      return await this.consultationModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
