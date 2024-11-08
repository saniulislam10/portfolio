
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit{
  constructor(public projectService: ProjectService){

  }
  ngOnInit(): void {
    this.spinner = false;
    this.getData();
  }
  getData() {
    this.projectService.getAll()
    .subscribe(res => {
      console.log(res);
    }, err=> {
      console.log(err);
    })
  }

  spinner=false;
  title = 'Saniul Islam';
  profession = 'Software Engineer';
  email = 'saniul.client@gmail.com';
  services:any = [];
  projects:any = [
    {
      "_id": "64b7c3c8c38c430021cfb87d",
      "title": "Web Application Development",
      "description": "A project focused on developing a web application using modern frameworks and best practices.",
      "technologies": ["JavaScript", "Node.js", "Express", "MongoDB"],
      "projectUrl": "https://example.com/webapp",
      "imageUrl": "../../../assets/project1.png",
      "startDate": "2023-05-01T00:00:00.000Z",
      "endDate": "2023-12-01T00:00:00.000Z",
      "status": "in progress",
      "skills": [
          "64a8b3c4d29c3b00128eb87f",
          "64a8b3c4d29c3b00128eb880"
      ],
      "createdAt": "2024-11-08T00:00:00.000Z",
      "updatedAt": "2024-11-08T00:00:00.000Z"
  }

  ];
}
