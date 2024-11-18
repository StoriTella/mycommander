import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomepageComponent } from '../homepage.component';

@Component({
  selector: 'app-creategroup',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomepageComponent
  ],
  templateUrl: './creategroup.component.html',
  styleUrl: './creategroup.component.css'
})
export class CreategroupComponent {

}
