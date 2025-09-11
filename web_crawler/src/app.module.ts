import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlFrontierModule } from './url_frontier/url_frontier.module';
import { UrlFrontierModule } from './url_frontier/url_frontier.module';

@Module({
  imports: [UrlFrontierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
