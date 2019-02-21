import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameControl';
  numbers: number[] = [];

  onIntervalEmitted(intervalNumber: number) {
     this.numbers.push(intervalNumber);
  }
}
