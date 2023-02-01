import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
import { Doc, DocDocument } from './entities/doc.entity';

@Injectable()
export class DocService {
  constructor(@InjectModel(Doc.name) private DocModel: Model<DocDocument>){}

  async create(createDocDto: CreateDocDto): Promise<Doc> {
    try {
      const createdDoc = new this.DocModel(createDocDto);
      return await createdDoc.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async createMany(dtos: CreateDocDto[]): Promise<Doc[]> {
    try {
      const createdDoc = await this.DocModel.insertMany(dtos);
      return createdDoc;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Doc[]> {
    try {
      return await this.DocModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Doc> {
    try {
      return await this.DocModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findByDossier(id: string): Promise<Doc> {
    try {
      return await this.DocModel.findOne({dossier: id});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateDocDto: UpdateDocDto): Promise<Doc> {
    try {
      return await this.DocModel.findByIdAndUpdate(id, updateDocDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Doc> {
    try {
      return await this.DocModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
