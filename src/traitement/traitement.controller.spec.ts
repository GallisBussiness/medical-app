import { Test, TestingModule } from '@nestjs/testing';
import { TraitementController } from './traitement.controller';
import { TraitementService } from './traitement.service';

describe('TraitementController', () => {
  let controller: TraitementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraitementController],
      providers: [TraitementService],
    }).compile();

    controller = module.get<TraitementController>(TraitementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
