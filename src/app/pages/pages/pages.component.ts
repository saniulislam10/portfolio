import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  spinner=false;
  title = 'Saniul Islam';
  profession = 'Software Engineer';
  email = 'saniul.client@gmail.com';
  services:any = [];
  projects:any = [];
}
