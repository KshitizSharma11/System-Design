import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlFrontierModule } from './url_frontier/url_frontier.module';
import { ExtractorModule } from './extractor/extractor.module';
import { ExtractorService } from './extractor/extractor.service';
import { UrlFrontierModule } from './url_frontier/url_frontier.module';

@Module({
  imports: [UrlFrontierModule, ExtractorModule],
  controllers: [AppController],
  providers: [AppService, ExtractorService],
})
export class AppModule {}
