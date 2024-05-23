import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { breakpoints } from './utils/breakpoints';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  ngOnInit(): void {
    if (window.document.body.clientWidth < breakpoints.sm) {
      alert('Small screen alert');
    }
  }
}
