import {BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class StudentStatusValidationPipe implements PipeTransform {
  // readonly allowedStatuses = [StudentsStatus.NEW, StudentsStatus.COMPLETED];

  transform(value: any) {
    value = value.toUpperCase();

    // if (!this.isStatusValid(value)) {
    //   throw new BadRequestException(`${value} is invalid status`);
    // }

    return value;
  }

  private isStatusValid(status: any) {
    // const idx = this.allowedStatuses.indexOf(status);
    // return idx !== -1;
  }
}
