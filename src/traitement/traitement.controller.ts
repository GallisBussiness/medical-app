import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TraitementService } from './traitement.service';
import { CreateTraitementDto } from './dto/create-traitement.dto';
import { UpdateTraitementDto } from './dto/update-traitement.dto';

@Controller('traitement')
export class TraitementController {
  constructor(private readonly traitementService: TraitementService) {}

  @Post()
  create(@Body() createTraitementDto: CreateTraitementDto) {
    return this.traitementService.create(createTraitementDto);
  }

  @Get()
  findAll() {
    return this.traitementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traitementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTraitementDto: UpdateTraitementDto) {
    return this.traitementService.update(+id, updateTraitementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.traitementService.remove(+id);
  }
}
