import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
    private navHeader!: HTMLElement | null;

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
    }
}
