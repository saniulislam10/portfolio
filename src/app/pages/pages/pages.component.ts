import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent implements OnInit {
  year = new Date().getFullYear();
  link = 'https://www.linkedin.com/in/sani10';
  skills: any = [
    {
      name: 'Angular',
      progress: 90,
    },
    {
      name: 'React',
      progress: 80,
    },
    {
      name: 'Ionic',
      progress: 80,
    },
    {
      name: 'Node.js',
      progress: 90,
    },
    {
      name: 'MongoDB',
      progress: 90,
    },
    {
      name: 'HTML',
      progress: 80,
    },
    {
      name: 'CSS',
      progress: 70,
    },
  ];
  constructor(
    public projectService: ProjectService,
    public skillService: SkillsService,
  ) {}
  ngOnInit(): void {
    this.spinner = false;
    this.getData();
  }
  getData() {
    this.projectService.getAll().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getSkills() {
    this.skillService.getAll().subscribe(
      (res) => {
        this.skills = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  spinner = false;
  title = 'Saniul Islam';
  profession = 'Full Stack Developer';
  email = 'saniul.client@gmail.com';
  services: any = [
    {
      name: 'Web Development',
      description:
        'Full Website planning to deployment including design, api, development everything.',
    },
    {
      name: 'Mobile App Development',
      description:
        'Full Website planning to deployment including design, api, development everything.',
    },
    {
      name: 'UI/UX',
      description: 'Designing using Adode XD or Figma. Developing the business need based features.',
    },
  ];
  projects: any = [
    {
      title: 'Careme Web Application',
      description:
        'This is an SSR-based E-commerce Web Application. It includes many aspects of new features including preorder, creating return, tracking packages etc',
      technologies: [
        'Angular',
        'Node.js',
        'Express',
        'MongoDB',
        'Ant Design',
        'Tailwind',
        'SCSS',
      ],
      projectUrl: 'https://caremebd.com',
      imageUrl: '../../../assets/careme-web.png',
      startDate: '2022-01-01T00:00:00.000Z',
      endDate: '2024-08-01T00:00:00.000Z',
      status: 'completed',
      skills: ['64a8b3c4d29c3b00128eb87f', '64a8b3c4d29c3b00128eb880'],
      createdAt: '2024-11-08T00:00:00.000Z',
      updatedAt: '2024-11-08T00:00:00.000Z',
    },
    {
      title: 'Careme Mobile App',
      description:
        'This is an mobile app for Careme. It includes many aspects of new features including notifications, deeplinks etc',
      technologies: ['Ionic', 'Angular', 'Ant Design', 'SCSS'],
      projectUrl: 'https://play.google.com/store/apps/details?id=com.caremebd',
      imageUrl: '../../../assets/app.png',
      startDate: '2022-01-01T00:00:00.000Z',
      endDate: '2024-08-01T00:00:00.000Z',
      status: 'completed',
      skills: ['64a8b3c4d29c3b00128eb87f', '64a8b3c4d29c3b00128eb880'],
      createdAt: '2024-11-08T00:00:00.000Z',
      updatedAt: '2024-11-08T00:00:00.000Z',
    },
    {
      title: 'Dwasa Pump Management',
      description:
        'This is a software build for pump management of Dhaka Wasa. Auto test report generation, pump managements are the core features here.',
      technologies: [
        'Angular',
        'Node.js',
        'Express',
        'MongoDB',
        'Ant Design',
        'Tailwind',
        'SCSS',
      ],
      projectUrl: 'https://dwasa.vercel.app/pumps',
      imageUrl: '../../../assets/dwasa.png',
      startDate: '2022-01-01T00:00:00.000Z',
      endDate: '2024-08-01T00:00:00.000Z',
      status: 'completed',
      skills: ['64a8b3c4d29c3b00128eb87f', '64a8b3c4d29c3b00128eb880'],
      createdAt: '2024-11-08T00:00:00.000Z',
      updatedAt: '2024-11-08T00:00:00.000Z',
    },
  ];
}
