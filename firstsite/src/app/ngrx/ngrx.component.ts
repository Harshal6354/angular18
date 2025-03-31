import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterValue } from '../store2/counter2.selectors';
import { increment, decrement, reset } from '../store2/counter2.actions';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-ngrx',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.css',
})
export class NgrxComponent {
  private store = inject(Store);

  counter$ = this.store.select(selectCounterValue);

  increase() {
    this.store.dispatch(increment());
  }

  decrease() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
