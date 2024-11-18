import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { JoingroupComponent } from './homepage/joingroup/joingroup.component';
import { CreategroupComponent } from './homepage/creategroup/creategroup.component';
import { ConfigComponent } from './lifetracker/config/config.component';
import { ShowComponent } from './lifetracker/show/show.component';
import {MatSelectModule} from '@angular/material/select';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      HomepageComponent,
      JoingroupComponent,
      CreategroupComponent,
      ConfigComponent,
      ShowComponent,
      MatSelectModule
    ]
})
export class AppComponent {
  title = 'mycommander';
}
