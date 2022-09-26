import { Injectable } from '@nestjs/common';
import { CreateTraitementDto } from './dto/create-traitement.dto';
import { UpdateTraitementDto } from './dto/update-traitement.dto';

@Injectable()
export class TraitementService {
  create(createTraitementDto: CreateTraitementDto) {
    return 'This action adds a new traitement';
  }

  findAll() {
    return `This action returns all traitement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} traitement`;
  }

  update(id: number, updateTraitementDto: UpdateTraitementDto) {
    return `This action updates a #${id} traitement`;
  }

  remove(id: number) {
    return `This action removes a #${id} traitement`;
  }
}
