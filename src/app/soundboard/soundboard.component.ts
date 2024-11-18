import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-soundboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSelectModule
  ],
  templateUrl: './soundboard.component.html',
  styleUrl: './soundboard.component.css'
})
export class SoundboardComponent {

  private deathSounds: HTMLAudioElement[] = [
    new Audio('assets/sound/death/marioDeathSound.mp3'),
  ];
  

  // Method to play a random sound
  playDeathSound() {
    const randomIndex = Math.floor(Math.random() * this.deathSounds.length); // Pick a random index
    const selectedSound = this.deathSounds[randomIndex];
    selectedSound.currentTime = 0; // Reset audio to start
    selectedSound.play(); // Play the randomly selected sound
  }
}
