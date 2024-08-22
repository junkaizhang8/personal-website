import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  route: string = 'home';
  private timeout: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((routerData: any): void => {
      if (routerData instanceof ResolveEnd) { 
        this.route = routerData.url.split('/')[1];
        this.loadPage();
      }
    });
  }

  navigateTo(route: string): void {
    this.route = route;
    this.router.navigate([route]);
    this.loadPage();
  }

  // Remove the scroll bar during page load
  private loadPage(): void {
    const body = document.querySelector('body');
    if (body) {
      // Clear the timeout if it exists
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }

      // Scroll to the top of the page
      window.scrollTo(0, 0);

      body.classList.add('page-loading');

      // Remove the page-loading class after animation is over
      this.timeout = setTimeout(() => body.classList.remove('page-loading'), 1000);
    }
  }
}
