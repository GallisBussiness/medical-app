import { PartialType } from '@nestjs/mapped-types';
import { CreateTraitementDto } from './create-traitement.dto';

export class UpdateTraitementDto extends PartialType(CreateTraitementDto) {}
