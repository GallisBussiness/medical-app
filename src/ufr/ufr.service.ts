import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUfrDto } from './dto/create-ufr.dto';
import { UpdateUfrDto } from './dto/update-ufr.dto';
import { Ufr, UfrDocument } from './entities/ufr.entity';

@Injectable()
export class UfrService {
  constructor(@InjectModel(Ufr.name) private ufrModel: Model<UfrDocument>) {}
  async create(createUfrDto: CreateUfrDto): Promise<Ufr> {
    try {
      const createdUfr = new this.ufrModel(createUfrDto);
      return await createdUfr.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Ufr[]> {
    try {
      return await this.ufrModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Ufr> {
    try {
      return await this.ufrModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateUfrDto: UpdateUfrDto): Promise<Ufr> {
    try {
      return await this.ufrModel.findByIdAndUpdate(id, updateUfrDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Ufr> {
    try {
      return await this.ufrModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
