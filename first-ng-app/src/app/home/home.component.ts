import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../component/greeting/greeting.component';
import { CounterComponent } from "../component/counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homemessage = signal("Hello, world! good day");

  keyUpHandler(event: KeyboardEvent){
    // console.log('user typed something in the input');
    console.log(`user pressed the ${event.key} key`)
  }
}
