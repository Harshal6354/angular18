import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2',
  standalone: true
})
export class Pipe2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
