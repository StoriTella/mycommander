import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomepageComponent } from '../homepage.component';

@Component({
  selector: 'app-joingroup',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomepageComponent
  ],
  templateUrl: './joingroup.component.html',
  styleUrl: './joingroup.component.css'
})
export class JoingroupComponent {

}
