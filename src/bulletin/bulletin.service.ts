import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBulletinDto } from './dto/create-bulletin.dto';
import { UpdateBulletinDto } from './dto/update-bulletin.dto';
import { Bulletin, BulletinDocument } from './entities/bulletin.entity';

@Injectable()
export class BulletinService {
  constructor(@InjectModel(Bulletin.name) private bulletinModel: Model<BulletinDocument>) {}
  async create(createBulletinDto: CreateBulletinDto): Promise<Bulletin> {
    try {
      const createdBulletin = new this.bulletinModel(createBulletinDto);
      return await createdBulletin.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Bulletin[]> {
    try {
      return await this.bulletinModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findByEtudiant(id: string): Promise<Bulletin[]> {
    try {
      return await this.bulletinModel.find({etudiant: id});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Bulletin> {
    try {
      return await this.bulletinModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateBulletinDto: UpdateBulletinDto): Promise<Bulletin> {
    try {
      return await this.bulletinModel.findByIdAndUpdate(id, updateBulletinDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Bulletin> {
    try {
      return await this.bulletinModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
