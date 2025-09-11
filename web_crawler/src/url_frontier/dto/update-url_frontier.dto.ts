import { PartialType } from '@nestjs/mapped-types';
import { CreateUrlFrontierDto } from './create-url_frontier.dto';

export class UpdateUrlFrontierDto extends PartialType(CreateUrlFrontierDto) {}
