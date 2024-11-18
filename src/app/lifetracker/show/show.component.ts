import { Component, Input, OnInit, inject } from '@angular/core';
import { Player } from '../../model/Player';
import { CommonModule, NgFor } from '@angular/common';
import { Config } from '../../model/Config';
import { MatSelectModule } from '@angular/material/select';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfigWindowComponent } from './config-window/config-window.component';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [NgFor,
    CommonModule,
    MatSelectModule
  ],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  @Input()
  listPlayers: Player[];

  @Input()
  listConfigs: Config[];

  @Input()
  numberOfPlayers: number;

  @Input()
  configPlayers: Config[][];

  constructor() {
    this.numberOfPlayers = 4;
    let pc1 = new Player('Player1', 'Kwain', 40, 0);
    let pc2 = new Player('Player2', 'Varina', 40, 0);
    let pc3 = new Player('Player3', 'Odric', 40, 0);
    let pc4 = new Player('Player4', 'Bosh', 40, 0);
    this.listPlayers = [pc1, pc2, pc3, pc4];
    let config1 = new Config("Damage");
    let config2 = new Config("CDamage 1");
    let config3 = new Config("CDamage 2");
    let config4 = new Config("Life");
    let config5 = new Config("Poison");
    this.listConfigs = [config1, config2, config3, config4, config5];
    this.configPlayers = [];
    for (let i = 0; i < this.numberOfPlayers; i++) {
      this.configPlayers[i] = [];
      for (let j = 0; j < this.numberOfPlayers; j++) {
        // Assign a copy of config1 to each position [i][j]
        this.configPlayers[i][j] = config1;
      }
    }
  }

  ngOnInit(): void {
  }

  quickClick(pcDamage: Player, pcActive: Player) {
    let indexPcActive = this.listPlayers.findIndex(pc => pc.name === pcActive.name);
    let indexPcDamage = this.listPlayers.findIndex(pc => pc.name === pcDamage.name);
    switch (this.configPlayers[indexPcActive][indexPcDamage].name) {
      case 'Damage':
        this.listPlayers[indexPcActive].life--;
        console.log(pcActive.name + " takes 1 damage from " + pcDamage.name);
        break;
      case 'CDamage 1':
        this.listPlayers[indexPcActive].life--;
        console.log(pcActive.name + " takes 1 c damage 1 from " + pcDamage.name);
        break;
      case 'CDamage 2':
        this.listPlayers[indexPcActive].life--;
        console.log(pcActive.name + " takes 1 c damage 2 from " + pcDamage.name);
        break;
      case 'Life':
        this.listPlayers[indexPcActive].life++;
        console.log(pcActive.name + " gives 1 life from " + pcDamage.name);
        break;
      case 'Poison':
        this.listPlayers[indexPcActive].poison++;
        console.log(pcActive.name + " takes 1 poison from " + pcDamage.name);
        break;
    }
  }

  changeConfig(pcActive: Player, pcDamage: Player) {
    let indexPcActive = this.listPlayers.findIndex(pc => pc.name === pcActive.name);
    let indexPcDamage = this.listPlayers.findIndex(pc => pc.name === pcDamage.name);
    let currentConfig = this.configPlayers[indexPcActive][indexPcDamage];
    let indexConfig = this.listConfigs.findIndex(config => config.name === currentConfig.name);
    if (indexConfig >= this.listConfigs.length - 1) {
      this.configPlayers[indexPcActive][indexPcDamage] = this.listConfigs[0];
    } else {
      this.configPlayers[indexPcActive][indexPcDamage] = this.listConfigs[indexConfig + 1];
    }
  }

  openConfigWindow(pcActive: Player, pcDamage: Player): void {
    let indexPcActive = this.listPlayers.findIndex(pc => pc.name === pcActive.name);
    let indexPcDamage = this.listPlayers.findIndex(pc => pc.name === pcDamage.name);
    let indexConfig = this.listConfigs.findIndex(config => config.name === this.configPlayers[indexPcActive][indexPcDamage].name);
    const dialogRef = this.dialog.open(ConfigWindowComponent, {
      data: { indexPcActive: indexPcActive, indexPcDamage: indexPcDamage, indexConfig:indexConfig},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined) {
        this.configPlayers[indexPcActive][indexPcDamage] = result;
      }
    });
  }
}
