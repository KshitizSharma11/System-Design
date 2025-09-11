import { Test, TestingModule } from '@nestjs/testing';
import { UrlFrontierController } from './url_frontier.controller';
import { UrlFrontierService } from './url_frontier.service';

describe('UrlFrontierController', () => {
  let controller: UrlFrontierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlFrontierController],
      providers: [UrlFrontierService],
    }).compile();

    controller = module.get<UrlFrontierController>(UrlFrontierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
