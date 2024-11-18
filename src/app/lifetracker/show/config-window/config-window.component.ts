import { Component, inject, model } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Config } from '../../../model/Config';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ConfigData {
  indexPcActive: number;
  indexPcDamage: number;
  indexConfig: number;
}

@Component({
  selector: 'app-config-window',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgFor,
    FormsModule,
  ],
  templateUrl: './config-window.component.html',
  styleUrl: './config-window.component.css'
})


export class ConfigWindowComponent {

  readonly dialogRef = inject(MatDialogRef<ConfigWindowComponent>);
  data = inject<ConfigData>(MAT_DIALOG_DATA);
  newConfig: Config;
  listConfigs: Config[];

  constructor() {
    let config1 = new Config("Damage");
    let config2 = new Config("CDamage 1");
    let config3 = new Config("CDamage 2");
    let config4 = new Config("Life");
    let config5 = new Config("Poison");
    this.listConfigs = [config1, config2, config3, config4, config5];
    this.newConfig = this.listConfigs[this.data.indexConfig];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.newConfig);
  }

}
