import { Injectable } from '@nestjs/common';
import { CreateUrlFrontierDto } from './dto/create-url_frontier.dto';
import { UpdateUrlFrontierDto } from './dto/update-url_frontier.dto';

@Injectable()
export class UrlFrontierService {
  create(createUrlFrontierDto: CreateUrlFrontierDto) {
    return 'This action adds a new urlFrontier';
  }

  findAll() {
    return `This action returns all urlFrontier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} urlFrontier`;
  }

  update(id: number, updateUrlFrontierDto: UpdateUrlFrontierDto) {
    return `This action updates a #${id} urlFrontier`;
  }

  remove(id: number) {
    return `This action removes a #${id} urlFrontier`;
  }
}
