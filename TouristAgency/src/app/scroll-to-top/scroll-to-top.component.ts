import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {

    windowScrolled = false;
    // windowScrolled!: boolean;
  
  
    @HostListener("window:scroll", [])
    onWindowScroll(){
      this.windowScrolled = window.pageYOffset > window.innerHeight / 2;
    }

    scrollToTop(): void {
      window.scrollTo(0, 0);
    }
}




