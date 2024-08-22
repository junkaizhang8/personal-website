import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './../../components/project/project.component';
import { PROJECTS } from './../../../constants/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = PROJECTS;

  constructor() {}
}
