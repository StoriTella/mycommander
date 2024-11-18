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
  
  private usedSounds: Record<string, Set<number>> = {
    bigDamage: new Set(),
    counterSpell: new Set(),
    makeDeal: new Set(),
    death: new Set(),
  };

  sounds: Record<string, HTMLAudioElement[]> = {
    bigDamage: [
      new Audio('assets/sound/bigDamage/lotOfDamage.mp3'),
      new Audio('assets/sound/bigDamage/scratch.mp3'),
      new Audio('assets/sound/bigDamage/scream.mp3'),
      new Audio('assets/sound/bigDamage/slap.mp3'),
      new Audio('assets/sound/bigDamage/emotionalDamage.mp3'),
      new Audio('assets/sound/bigDamage/fireball.mp3'),
    ],
    danger: [
      new Audio('assets/sound/danger/danger.mp3'),
      new Audio('assets/sound/danger/bossMusic.mp3'),
      new Audio('assets/sound/danger/doom.mp3'),
      new Audio('assets/sound/danger/elevator.mp3'),
      new Audio('assets/sound/danger/fnaf2.mp3'),
      new Audio('assets/sound/danger/law.mp3'),
    ],
    counterSpell: [
      new Audio('assets/sound/counterspell/nope.mp3'),
      new Audio('assets/sound/counterspell/trapCard.mp3'),
      new Audio('assets/sound/counterspell/windowsError.mp3'),
      new Audio('assets/sound/counterspell/noGod.mp3'),
      new Audio('assets/sound/counterspell/boom.mp3'),
      new Audio('assets/sound/counterspell/iluminati.mp3'),
      new Audio('assets/sound/counterspell/ambulance.mp3'),
      new Audio('assets/sound/counterspell/gandalf.mp3'),
      new Audio('assets/sound/counterspell/no.mp3'),
    ],
    makeDeal: [
      new Audio('assets/sound/deal/deal.mp3'),
      new Audio('assets/sound/deal/amogus.mp3'),
      new Audio('assets/sound/deal/sanctuary.mp3'),
      new Audio('assets/sound/deal/jojo.mp3'),
      new Audio('assets/sound/deal/discord.mp3'),
    ],
    death: [
      new Audio('assets/sound/death/marioDeathSound.mp3'),
      new Audio('assets/sound/death/windowsShutdown.mp3'),
      new Audio('assets/sound/death/eldenRingDie.mp3'),
      new Audio('assets/sound/death/snake.mp3'),
      new Audio('assets/sound/death/directedByRobert.mp3'),
      new Audio('assets/sound/death/weGotThem.mp3'),
      new Audio('assets/sound/death/music.mp3'),
      new Audio('assets/sound/death/rules.mp3'),
      new Audio('assets/sound/death/missionFailed.mp3'),
      new Audio('assets/sound/death/pc.mp3'),
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
      { key: 'danger', label: 'Danger' },
      { key: 'death', label: 'Death' },
    ];
    // Initialize the used sounds object to track used indices
    Object.keys(this.sounds).forEach(key => {
      this.usedSounds[key] = new Set();
    });
  }

  // Method to play a random sound
  /*
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
    */

  playSound(soundEffect: keyof typeof this.sounds) {
    const soundArray = this.sounds[soundEffect];
    const usedSet = this.usedSounds[soundEffect];

    if (soundArray.length === usedSet.size) {
      //console.log('All sounds from this category have been used.');
      //return; // Stop if all sounds have been used in the category
      this.reset(soundEffect);
    }

    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * soundArray.length);
    } while (usedSet.has(randomIndex)); // Ensure the sound is not repeated

    // Play the selected sound
    this.selectedSound = soundArray[randomIndex];
    this.selectedSound.currentTime = 0; // Reset audio to start
    this.selectedSound.play()
      .catch((error) => console.error('Error playing audio:', error));

    // Mark this sound as used
    usedSet.add(randomIndex);
  }

  // Method to reset the used sounds (if you want to restart the process)
  reset(soundEffect: string) {
    this.usedSounds[soundEffect].clear();
  }

  resetAll() {
    Object.keys(this.usedSounds).forEach(key => {
      this.usedSounds[key].clear(); // Clear the set of used sounds for each category
    });
  }

  stop() {
    if (this.selectedSound) {
      this.selectedSound.currentTime = 0; // Reset audio to start
      this.selectedSound.pause(); // Pause the audio
    } else {
      console.error('No sound is currently playing.');
    }
  }


  // Method to play a specific sound by category and index
  playSpecificSound(soundEffect: keyof typeof this.sounds, index: number) {
    const soundArray = this.sounds[soundEffect];
    
    if (soundArray && soundArray[index]) {
      this.selectedSound = soundArray[index];
      this.selectedSound.currentTime = 0; // Reset audio to start
      this.selectedSound.play()
        .catch((error) => console.error('Error playing audio:', error));
    } else {
      console.error('Invalid sound or index');
    }
  }

}
