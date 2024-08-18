import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalId: any;
  greeting: string = 'Hello!';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.intervalId = setInterval(this.changeGreetings, 3000);
  }

  changeGreetings() {
    console.log('Hello, world!');
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
