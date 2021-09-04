import {Test, TestingModule} from '@nestjs/testing';
import {MarkerService} from './marker.service';

describe('MarkerService', () => {
  let service: MarkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkerService]
    }).compile();

    service = module.get<MarkerService>(MarkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
