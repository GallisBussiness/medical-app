import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { FormationService } from 'src/formation/formation.service';

@Controller('etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService,private readonly formationService: FormationService,) {}

  @Post()
  create(@Body() createEtudiantDto: CreateEtudiantDto) {
    return this.etudiantService.create(createEtudiantDto);
  }

  @Get()
  findAll() {
    return this.etudiantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const et = await this.etudiantService.findOne(id);
    const f = await this.formationService.findOne(`${et.formation}`)
    et.formation = f;
    return et;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEtudiantDto: UpdateEtudiantDto,
  ) {
    return this.etudiantService.update(id, updateEtudiantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etudiantService.remove(id);
  }
}
