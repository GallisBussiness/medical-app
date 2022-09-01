import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEtablissementDto } from './dto/create-etablissement.dto';
import { UpdateEtablissementDto } from './dto/update-etablissement.dto';
import {
  Etablissement,
  EtablissementDocument,
} from './entities/etablissement.entity';

@Injectable()
export class EtablissementService {
  constructor(
    @InjectModel(Etablissement.name)
    private etablissementModel: Model<EtablissementDocument>,
  ) {}
  async create(
    createEtablissementDto: CreateEtablissementDto,
  ): Promise<Etablissement> {
    try {
      const createdEtablissement = new this.etablissementModel(
        createEtablissementDto,
      );
      return await createdEtablissement.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Etablissement[]> {
    try {
      return await this.etablissementModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Etablissement> {
    try {
      return await this.etablissementModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateEtablissementDto: UpdateEtablissementDto,
  ): Promise<Etablissement> {
    try {
      return await this.etablissementModel.findByIdAndUpdate(
        id,
        updateEtablissementDto,
      );
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Etablissement> {
    try {
      return await this.etablissementModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
