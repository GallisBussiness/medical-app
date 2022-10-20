import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormationService } from 'src/formation/formation.service';
import { UfrService } from 'src/ufr/ufr.service';
import { BulletinService } from './bulletin.service';
import { CreateBulletinDto } from './dto/create-bulletin.dto';
import { UpdateBulletinDto } from './dto/update-bulletin.dto';

@Controller('bulletin')
export class BulletinController {
  constructor(private readonly bulletinService: BulletinService,
    private readonly formationService: FormationService,
    private readonly ufrService: UfrService,
    ) {}

  @Post()
  create(@Body() createBulletinDto: CreateBulletinDto) {
    return this.bulletinService.create(createBulletinDto);
  }

  @Get()
  findAll() {
    return this.bulletinService.findAll();
  }

  @Get('byetudiant/:id')
  findByEtudiant(@Param('id') id: string) {
    return this.bulletinService.findByEtudiant(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bulletinService.findOne(id);
    // const bulletin = await this.bulletinService.findOne(id);
    // const formation = await this.formationService.findOne(`${bulletin?.etudiant?.formation}`)
    // const ufr = await this.ufrService.findOne(`${formation?.departement?.ufr}`);
    // formation.departement.ufr = ufr;
    // bulletin.etudiant.formation = formation;
    // return bulletin;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBulletinDto: UpdateBulletinDto) {
    return this.bulletinService.update(id, updateBulletinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bulletinService.remove(id);
  }
}
