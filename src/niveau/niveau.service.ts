import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNiveauDto } from './dto/create-niveau.dto';
import { UpdateNiveauDto } from './dto/update-niveau.dto';
import { Niveau, NiveauDocument } from './entities/niveau.entity';

@Injectable()
export class NiveauService {
  constructor(@InjectModel(Niveau.name) private niveauModel: Model<NiveauDocument>){}
  async create(createNiveauDto: CreateNiveauDto): Promise<Niveau> {
    try {
      const createdNiveau = new this.niveauModel(createNiveauDto);
      return await createdNiveau.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Niveau[]> {
    try {
      return await this.niveauModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Niveau> {
    try {
      return await this.niveauModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateNiveauDto: UpdateNiveauDto): Promise<Niveau> {
    try {
      return await this.niveauModel.findByIdAndUpdate(id, updateNiveauDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Niveau> {
    try {
      return await this.niveauModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
