import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit{
  ngOnInit(): void {
    this.spinner = false;
  }
  spinner=false;
  title = 'Saniul Islam';
  profession = 'Software Engineer';
  email = 'saniul.client@gmail.com';
  services:any = [];
  projects:any = [];
}
