import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StickyNotes} from './sticky-notes/sticky-notes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StickyNotes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sticky-notes');
}
