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

  constructor(private store: Store<{ counter: number; nothing: number }>) {
    // Store<{#Name: #Structure}>
    // #Name: should match what you declare at stateProvider in app.config.this
    // #Structure: should match the state structure declared in the store of #Name
    // notice: excessive #Name in Store<{#Name: #Structure}>, as in nothing, does NOT cause any error

    // this.store.select can ONLY select what is declare in #Name of private store
    this.count$ = this.store.select('counter');
  }
  ngOnInit(): void {}

  increase() {
    this.store.dispatch(CounterActions.increase());
  }

  decrease() {
    this.store.dispatch(CounterActions.decrease());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
