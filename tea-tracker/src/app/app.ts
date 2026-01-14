import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TeaTracker} from './tea-tracker/tea-tracker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TeaTracker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tea-tracker');
}
