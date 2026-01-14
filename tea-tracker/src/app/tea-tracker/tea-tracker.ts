import { Component } from '@angular/core';

@Component({
  selector: 'app-tea-tracker',
  imports: [],
  templateUrl: './tea-tracker.html',
  styleUrl: './tea-tracker.css',
})
export class TeaTracker {
  cups = 1;
  maxCups = 8;

  addCup() {
    if (this.cups < this.maxCups) {
      this.cups++;
    }
  }

  removeCup() {
    if (this.cups > 0) {
      this.cups--;
    }
  }
}
