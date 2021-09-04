import {Test, TestingModule} from '@nestjs/testing';
import {MarkerController} from './marker.controller';
import {MarkerService} from './marker.service';

describe('MarkerController', () => {
  let controller: MarkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkerController],
      providers: [MarkerService]
    }).compile();

    controller = module.get<MarkerController>(MarkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
