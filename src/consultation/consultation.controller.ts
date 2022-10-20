import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormationService } from 'src/formation/formation.service';
import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';

@Controller('consultation')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService, private readonly formationService: FormationService) {}

  @Post()
  create(@Body() createConsultationDto: CreateConsultationDto) {
    return this.consultationService.create(createConsultationDto);
  }

  @Get()
  findAll() {
    return this.consultationService.findAll();
  }

  @Get('byetudiant/:id')
  findByEtudiant(@Param('id') id: string) {
    return this.consultationService.findByEtudiant(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultationService.findOne(id);
    // const consultation =  await this.consultationService.findOne(id);
    // const formation = await this.formationService.findOne(`${consultation?.etudiant?.formation}`)
    // consultation.etudiant.formation = formation;
    // return consultation;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultationDto: UpdateConsultationDto) {
    return this.consultationService.update(id, updateConsultationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultationService.remove(id);
  }
}
