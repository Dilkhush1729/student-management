import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentName',
  standalone: false
})
export class StudentNamePipe implements PipeTransform { 
  transform(value: string): string {
    return value.toUpperCase();
  }

}
