import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { unlinkSync } from 'fs';
import { DocService } from './doc.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';

@Controller('doc')
export class DocController {
  constructor(private readonly docService: DocService) {}

  
  @Post()
  @UseInterceptors(FileInterceptor('doc'))
  create(@UploadedFile() file: Express.Multer.File,@Body() createDocDto: CreateDocDto) {
     createDocDto.nom  = file.filename;
    return this.docService.create(createDocDto);
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
  @UseInterceptors(FileInterceptor('doc'))
  async update(@UploadedFile() file: Express.Multer.File,@Param('id') id: string, @Body() updateDocDto: UpdateDocDto) {
    updateDocDto.nom  = file.filename;
    const doc = await this.docService.update(id, updateDocDto);
    if(doc)
    unlinkSync(`uploads/docs/${doc.nom}`);

    return doc;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const doc = await this.docService.remove(id);
    if(doc)
    unlinkSync(`uploads/docs/${doc.nom}`);
    return doc;
  }
}
