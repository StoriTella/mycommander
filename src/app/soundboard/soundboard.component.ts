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
    new Audio('assets/sound/death/snake.mp3'),
  ];

  private bigDamage: HTMLAudioElement[] = [
    new Audio('assets/sound/death/marioDeathSound.mp3'),
  ];
  
  private counterSpell: HTMLAudioElement[] = [
    new Audio('assets/sound/death/marioDeathSound.mp3'),
  ];
  
  private smallDamage: HTMLAudioElement[] = [
    new Audio('assets/sound/death/marioDeathSound.mp3'),
  ];
  
  private makeDeal: HTMLAudioElement[] = [
    new Audio('assets/sound/death/marioDeathSound.mp3'),
  ];
  
  private waiting: HTMLAudioElement[] = [
    new Audio('assets/sound/death/marioDeathSound.mp3'),
  ];
  


  // Method to play a random sound
  playSound(soundEffect: string) {
    let soundArray: HTMLAudioElement[] = [];
    switch (soundEffect) {
      case 'death':
        soundArray = this.deathSounds;
        break;
    }
    // Pick a random sound from the selected array and play it
    if (soundArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * soundArray.length);
      console.log(randomIndex);
      const selectedSound = soundArray[randomIndex];
      selectedSound.currentTime = 0; // Reset audio to the start
      selectedSound
        .play()
        .catch((error) => console.error('Error playing audio:', error));
    } else {
      console.error(`No sounds available for ${soundEffect}`);
    }
  }

  stop() {

  }

}
