import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { ConfigComponent } from '../lifetracker/config/config.component';
import { ShowComponent } from '../lifetracker/show/show.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    JoingroupComponent,
    CreategroupComponent,
    ConfigComponent,
    ShowComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private router: Router) {}

}
