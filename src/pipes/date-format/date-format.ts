import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


/**
 * Generated class for the DateFormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  /**
   * Takes date string and converts it into desired format.
   */
  transform(value: string, ...args) {
    let date: Date = new Date();
    if (value) {
      date = new Date(Date.parse(value));
    }
    return super.transform(date, args[0]);
  }
}
