import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './homepage/homepage.component';
import { JoingroupComponent } from './homepage/joingroup/joingroup.component';
import { CreategroupComponent } from './homepage/creategroup/creategroup.component';
import { ConfigComponent } from './lifetracker/config/config.component';
import { ShowComponent } from './lifetracker/show/show.component';
import { SoundboardComponent } from './soundboard/soundboard.component';

export const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'join-group', component: JoingroupComponent },
    { path: 'create-group', component: CreategroupComponent },
    { path: 'lifetracker-config', component: ConfigComponent },
    { path: 'lifetracker-show', component: ShowComponent },
    { path: 'soundboard', component: SoundboardComponent },
    { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];
@NgModule({
   imports: [BrowserModule, RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class RoutingModule {}