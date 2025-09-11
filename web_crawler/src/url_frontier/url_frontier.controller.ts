import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UrlFrontierService } from './url_frontier.service';
import { CreateUrlFrontierDto } from './dto/create-url_frontier.dto';
import { UpdateUrlFrontierDto } from './dto/update-url_frontier.dto';

@Controller('url-frontier')
export class UrlFrontierController {
  constructor(private readonly urlFrontierService: UrlFrontierService) {}

  @Post()
  create(@Body() createUrlFrontierDto: CreateUrlFrontierDto) {
    return this.urlFrontierService.create(createUrlFrontierDto);
  }

  @Get()
  findAll() {
    return this.urlFrontierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.urlFrontierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUrlFrontierDto: UpdateUrlFrontierDto) {
    return this.urlFrontierService.update(+id, updateUrlFrontierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlFrontierService.remove(+id);
  }
}
