import { AfterViewInit, Component, HostListener } from '@angular/core';
import {LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
    private navHeader!: HTMLElement | null;
    lang = 'en-US';

    constructor(private translateS: TranslateService) {}

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        if (window.scrollY <= 100 && window.innerWidth >= 992) {
            this.navHeader?.classList.remove('nav-bg-scroll');
        } else {
            this.navHeader?.classList.add('nav-bg-scroll');
        }
    }

    ngAfterViewInit(): void {
        this.navHeader = document.getElementById('nav-header');
        if (window.innerWidth >= 992) 
            this.navHeader?.classList.remove('nav-bg-scroll');

        this.translateS.onLangChange.subscribe((event: LangChangeEvent) => {
            this.lang = event.lang;
            localStorage.setItem('lang', event.lang);
        });
    }
    
    changeLanguage(lang: string): void {
        this.translateS.use(lang);
    }
}
