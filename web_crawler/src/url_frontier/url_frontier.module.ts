import { Module } from '@nestjs/common';
import { UrlFrontierService } from './url_frontier.service';
import { UrlFrontierController } from './url_frontier.controller';

@Module({
  controllers: [UrlFrontierController],
  providers: [UrlFrontierService],
})
export class UrlFrontierModule {}
