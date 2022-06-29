import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Pipe({
  name: 'prioritySort'
})
export class PrioritySortPipe implements PipeTransform {

  transform(value: Todo[] | null, ...args: unknown[]): Todo[] | null {
    if (value) {
      return value.sort((t1, t2) => t2.priority - t1.priority);
    }
    return null;

  }

}
