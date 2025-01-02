import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslationService } from '../../core/services/translation.services';
import { TranslatePipe } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [MatIcon, TranslatePipe, RouterLink],
    templateUrl: './settings.component.html',
})
export class SettingsComponent {
    constructor(protected i18n: TranslationService) {}

    protected readonly environment = environment;
}
