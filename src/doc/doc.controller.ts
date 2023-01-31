import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocService } from './doc.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';

@Controller('doc')
export class DocController {
  constructor(private readonly docService: DocService) {}

  
  @Post()
  @UseInterceptors(FileInterceptor('docs'))
  create(@UploadedFiles() files: Array<Express.Multer.File>,@Body() createDocDto: CreateDocDto) {
    const dtos = files.map(f => ({...createDocDto,name: f.filename}));
    return this.docService.createMany(dtos);
  }

  @Get()
  findAll() {
    return this.docService.findAll();
  }

  @Get('bydossier/:id')
  findByDossier(@Param('id') id: string) {
    return this.docService.findByDossier(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocDto: UpdateDocDto) {
    return this.docService.update(id, updateDocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docService.remove(id);
  }
}
