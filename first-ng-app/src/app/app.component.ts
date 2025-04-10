import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  template: `
  <app-header/>
  <main class="p-2">
    <router-outlet/>
  </main>
  `,
  styles: [`
    
    `],
})
export class AppComponent {
  title = 'first-ng-app';
}
