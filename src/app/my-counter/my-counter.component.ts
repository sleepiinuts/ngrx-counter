import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { CounterActions } from '../store/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css',
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;
  // count: number = -1;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter');
  }
  ngOnInit(): void {
    // this.store.subscribe((c) => {
    //   this.count = c.counter;
    //   console.log('state: ' + c.counter);
    // });
  }

  increase() {
    this.store.dispatch(CounterActions.increase());
    // console.log('counter: ' + JSON.stringify(this.count));
  }

  decrease() {
    this.store.dispatch(CounterActions.decrease());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
