import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomepageComponent } from '../../homepage/homepage.component';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-config',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomepageComponent,
    MatSelectModule
  ],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {

  numberOfPlayers: number = 4;

}
