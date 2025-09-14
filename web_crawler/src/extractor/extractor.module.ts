import { Module } from '@nestjs/common';
import { ExtractorController } from './extractor.controller';

@Module({
  controllers: [ExtractorController],
})
export class ExtractorModule {}
