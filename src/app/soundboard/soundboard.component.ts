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
  

  private sounds: Record<string, HTMLAudioElement[]> = {
    bigDamage: [
      new Audio('assets/sound/bigDamage/lotOfDamage.mp3'),
      new Audio('assets/sound/bigDamage/scratch.mp3'),
      new Audio('assets/sound/bigDamage/scream.mp3'),
      new Audio('assets/sound/bigDamage/slap.mp3'),
    ],
    counterSpell: [
      new Audio('assets/sound/counterspell/nope.mp3'),
      new Audio('assets/sound/counterspell/trapCard.mp3'),
      new Audio('assets/sound/counterspell/windowsError.mp3'),
    ],
    makeDeal: [
      new Audio('assets/sound/deal/deal.mp3'),
    ],
    waiting: [
      new Audio('assets/sound/waiting/elevator.mp3'),
    ],
    death: [
      new Audio('assets/sound/death/marioDeathSound.mp3'),
      new Audio('assets/sound/death/windowsShutdown.mp3'),
      new Audio('assets/sound/death/eldenRingDie.mp3'),
      new Audio('assets/sound/death/snake.mp3'),
    ],
  };
  
  // Array to store button data
  soundEffects: any;

  private selectedSound : HTMLAudioElement | undefined;

  constructor() {
    this.soundEffects = [
      { key: 'counterSpell', label: 'Counter Spell' },
      { key: 'bigDamage', label: 'Big Damage' },
      { key: 'makeDeal', label: 'Make a Deal' },
      { key: 'waiting', label: 'Waiting' },
      { key: 'death', label: 'Death' },
    ];
  }

  // Method to play a random sound
  playSound(soundEffect: keyof typeof this.sounds) {
    const soundArray = this.sounds[soundEffect];

    if (soundArray && soundArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * soundArray.length);
      this.selectedSound = soundArray[randomIndex];
      this.selectedSound.currentTime = 0; // Reset audio to start
      this.selectedSound
        .play()
        .catch((error) => console.error('Error playing audio:', error));
    } else {
      console.error(`No sounds available for ${soundEffect}`);
    }
  }

  stop() {
    if (this.selectedSound) {
      this.selectedSound.currentTime = 0; // Reset audio to start
      this.selectedSound.pause(); // Pause the audio
    } else {
      console.error('No sound is currently playing.');
    }
  }

}
