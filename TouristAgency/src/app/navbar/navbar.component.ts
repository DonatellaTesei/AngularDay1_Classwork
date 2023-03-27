import { Component, OnInit } from '@angular/core';
// import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// @HostListener('window:scroll', ['$event'])

export class NavbarComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {

    let scrollHeigth;
 
    if(window.innerWidth < 350){
     scrollHeigth = 150;
    }else if(window.innerWidth < 500 && window.innerWidth > 350){
     scrollHeigth = 250;
    }else if(window.innerWidth < 700 && window.innerWidth > 500){
     scrollHeigth = 350;
    }else if(window.innerWidth < 1000 && window.innerWidth > 700){
     scrollHeigth = 500;
    }else{
      scrollHeigth = 650;
    }
 
     if(window.scrollY >= scrollHeigth){
       document.body.style.setProperty('--navbar-scroll', "rgba(0, 0, 0, 1)");
       document.body.style.setProperty('--navbar-scroll-text', "black");
       document.body.style.setProperty('--navbar-scroll-shadow', "0 3px 10px rgba(0, 0, 0, 015)");
       document.body.style.setProperty('--nav-item-hover', "rgba(172, 171, 172, 0.3)");
       document.body.style.setProperty('--nav-item-collspse', "rgba(0, 0, 0, 1)");
       document.body.style.setProperty('--dropdown-menu', "rgba(0, 0, 0, 0.5)");
       document.body.style.setProperty('--dropdown-menu-font-color', "white");
     
     }else if(window.scrollY < scrollHeigth){
       document.body.style.setProperty('--navbar-scroll', "transparent");
       document.body.style.setProperty('--navbar-scroll-text', "white");
       document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
       document.body.style.setProperty('--nav-item-hover', "rgba(216, 112, 147, 0.3)");
       document.body.style.setProperty('--nav-item-collspse', "transparent");
       document.body.style.setProperty('--dropdown-menu', "rgba(245, 245, 245, 0.3)");
       document.body.style.setProperty('--dropdown-menu-font-color', "black");
   
     }
   }
 
 }
 


 
 

