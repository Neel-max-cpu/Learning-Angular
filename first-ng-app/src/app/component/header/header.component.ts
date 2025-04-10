import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // new way to do it ---
  title = signal("My first angular app")
  // can be done without signal(previously done like that, don't use this -- signals is used in new version)
  // title2 = "hehe 2nd way i guess"
}
