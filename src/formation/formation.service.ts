import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation, FormationDocument } from './entities/formation.entity';

@Injectable()
export class FormationService {
  constructor(
    @InjectModel(Formation.name)
    private formationModel: Model<FormationDocument>,
  ) {}
  async create(createFormationDto: CreateFormationDto): Promise<Formation> {
    try {
      const createdFormation = new this.formationModel(createFormationDto);
      return await createdFormation.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Formation[]> {
    try {
      return await this.formationModel.find().populate(['departement','niveau']);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Formation> {
    try {
      return await this.formationModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateFormationDto: UpdateFormationDto,
  ): Promise<Formation> {
    try {
      return await this.formationModel.findByIdAndUpdate(
        id,
        updateFormationDto,
      );
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Formation> {
    try {
      return await this.formationModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
