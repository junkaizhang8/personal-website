import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GREETINGS_LIST } from '../../../constants/hello';
import { style, animate, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(150px)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
    ]),
    trigger('slideOut', [
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('1000ms', style({ opacity: 0, transform: 'translateY(-150px)' }))
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalId: any;
  greetingsListIdx: number = 0;
  swapGreeting: boolean = false;
  greeting: string = 'Hello!';
  oldGreeting: string = 'Hello!';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.intervalId = setInterval(this.changeGreetings, 3000);
  }

  changeGreetings = (): void => {
    // Generate a random index that is not the current index
    const randomNumber = this.getRandomNumber(1, GREETINGS_LIST.length);
    const idx = (this.greetingsListIdx + randomNumber) % GREETINGS_LIST.length;

    // Update
    this.greetingsListIdx = idx;
    this.oldGreeting = this.greeting;
    this.greeting = GREETINGS_LIST[idx];
    this.swapGreeting = true;

    setInterval(() => this.swapGreeting = false, 1000);
  }

  // Generate a random number between min (inclusive) and max (exclusive)
  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
