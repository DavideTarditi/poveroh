import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    langList = ['en'];
    defaultLang = 'en';

    constructor(private translate: TranslateService) {
        this.translate.addLangs(this.langList);
        this.translate.setDefaultLang(this.defaultLang);

        const browserLang = this.translate.getBrowserLang()?.toLowerCase();
        const langToUse =
            browserLang && this.langList.includes(browserLang)
                ? browserLang
                : this.defaultLang;

        this.translate.use(langToUse);
    }

    getCurrentLang(): string {
        return this.translate.currentLang;
    }

    setLanguage(lang: string): void {
        this.translate.use(lang);
    }

    translateKey(key: string, params?: object) {
        return this.translate.get(key, params);
    }

    t(key: string, params?: object): string {
        return this.translate.instant(key, params);
    }
}
