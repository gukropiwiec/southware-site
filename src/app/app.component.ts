import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'southware-site';
    lang = 'en-US';
    
    constructor(private translateS: TranslateService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.languageConfig();
    }

    /**
     * This method will set the language based on these steps:
     * 1. The default language is **'en-US'**
     * 2. It will try to get the **browser language** and if theres any, overwrite the first step
     * 3. It will try to get the language on **local storage** and if theres any, overwrite the first two steps
     * 4. It will try to get the language from **query params** and if theres any, overwrite the first three steps.
     */
    private languageConfig(): void {
        const browserLang = this.translateS.getBrowserCultureLang();
        this.lang = browserLang || this.lang;
        this.lang = localStorage.getItem('lang') || this.lang;
        this.translateS.use(this.lang).subscribe(() => {
            this.activatedRoute.queryParams.subscribe((queryParams) => {
                if (queryParams['lang']) {
                    this.translateS.use(queryParams['lang']);
                }
            });
        });
        this.translateS.onLangChange.subscribe((event: LangChangeEvent) => {
            this.lang = event.lang;
            localStorage.setItem('lang', event.lang);
        });
    }
}
