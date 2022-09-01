import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import {
  Departement,
  DepartementDocument,
} from './entities/departement.entity';

@Injectable()
export class DepartementService {
  constructor(
    @InjectModel(Departement.name)
    private departementModel: Model<DepartementDocument>,
  ) {}

  async create(
    createDepartementDto: CreateDepartementDto,
  ): Promise<Departement> {
    try {
      const createdDepartement = new this.departementModel(
        createDepartementDto,
      );
      return await createdDepartement.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Departement[]> {
    try {
      return await this.departementModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Departement> {
    try {
      return await this.departementModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateDepartementDto: UpdateDepartementDto,
  ): Promise<Departement> {
    try {
      return await this.departementModel.findByIdAndUpdate(
        id,
        updateDepartementDto,
      );
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Departement> {
    try {
      return await this.departementModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
