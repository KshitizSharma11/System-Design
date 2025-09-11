import { Test, TestingModule } from '@nestjs/testing';
import { UrlFrontierService } from './url_frontier.service';

describe('UrlFrontierService', () => {
  let service: UrlFrontierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlFrontierService],
    }).compile();

    service = module.get<UrlFrontierService>(UrlFrontierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
