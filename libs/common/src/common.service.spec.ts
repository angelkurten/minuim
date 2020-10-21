import { Test, TestingModule } from '@nestjs/testing';
import { MuCommonService } from './chronos';

describe('MuCommonService', () => {
  let service: MuCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuCommonService],
    }).compile();

    service = module.get<MuCommonService>(MuCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
