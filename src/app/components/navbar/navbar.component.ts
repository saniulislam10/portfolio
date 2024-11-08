import { HostListener, OnInit } from '@angular/core';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  scrollPosition = 0;
  showBackToTop = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.scrolling, true);
    }
  }

  ngOnInit(): void {
  }

  private scrolling = () => {
    this.scrollPosition = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(this.scrollPosition > 200){
      this.showBackToTop = true;
    }else{
      this.showBackToTop = false;

    }

  }



}
