import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    langList = ['en'];
    defaultLang = 'en';

    constructor(private translate: TranslateService) {
        this.translate.addLangs(this.langList);
        this.translate.setDefaultLang(this.defaultLang);

        translate.use(translate.getBrowserLang() || this.defaultLang);
    }

    getCurrentLang(): string {
        return this.translate.currentLang;
    }

    setLanguage(lang: string): void {
        this.translate.use(lang);
    }

    translateKey(key: string, params?: object): Observable<string> {
        return this.translate.get(key, params);
    }

    t(key: string, params?: object): string {
        return this.translate.instant(key, params);
    }
}
