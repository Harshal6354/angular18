import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'pipe1',
  standalone: true
})
export class Pipe1Pipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if(value !=null && value !=undefined && value !==''){
      return value;
    }else{
      return 'NA';
    }     
  }
}
