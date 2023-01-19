import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDossierDto } from './dto/create-dossier.dto';
import { UpdateDossierDto } from './dto/update-dossier.dto';
import { Dossier, DossierDocument } from './entities/dossier.entity';

@Injectable()
export class DossierService {

  constructor(@InjectModel(Dossier.name) private dossierModel: Model<DossierDocument>){}

  async create(createDossierDto: CreateDossierDto): Promise<Dossier> {
    try {
      const createdDossier = new this.dossierModel(createDossierDto);
      return await createdDossier.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Dossier[]> {
    try {
      return await this.dossierModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Dossier> {
    try {
      return await this.dossierModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findByEtudiant(id: string): Promise<Dossier> {
    try {
      return await this.dossierModel.findOne({etudiant: id});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateDossierDto: UpdateDossierDto): Promise<Dossier> {
    try {
      return await this.dossierModel.findByIdAndUpdate(id, updateDossierDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Dossier> {
    try {
      return await this.dossierModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
