import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    // console.log({value, metadata})
    // Si esto NO Es UN ID DE MONGO
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`EL valor ${value} no es un MongID`);
    }
    return value.toUpperCase();
  }
}
