import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModuleConfig } from '../module-config';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GuildService } from '../services/guild.service';
import { SaveChangesComponent } from '../save-changes/save-changes.component';

@Component({
  selector: 'app-settings-module',
  templateUrl: './settings-module.component.html',
  styleUrls: ['./settings-module.component.css']
})
export class SettingsModuleComponent extends ModuleConfig implements OnInit {
  moduleName = 'settings';

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    saveChanges: MatSnackBar) {
    super(guildService, route, saveChanges);
  }

  async ngOnInit() {
    await super.init();
  }

  protected buildForm() {
    return new FormGroup({
      privateLeaderboard: new FormControl('')
    });
  }
  
  protected initFormValues() {
    const settings = this.savedGuild.settings;
    console.log(settings);    
    this.form.controls.privateLeaderboard.setValue(settings.privateLeaderboard);
  }
}
