import { Injectable } from '@nestjs/common';
import { CreateUfrDto } from './dto/create-ufr.dto';
import { UpdateUfrDto } from './dto/update-ufr.dto';

@Injectable()
export class UfrService {
  create(createUfrDto: CreateUfrDto) {
    return 'This action adds a new ufr';
  }

  findAll() {
    return `This action returns all ufr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ufr`;
  }

  update(id: number, updateUfrDto: UpdateUfrDto) {
    return `This action updates a #${id} ufr`;
  }

  remove(id: number) {
    return `This action removes a #${id} ufr`;
  }
}
