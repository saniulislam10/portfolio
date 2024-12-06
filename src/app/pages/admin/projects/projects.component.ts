import { Component } from '@angular/core';
import { Project } from '../../../interface/project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '../../../interface/select';
import { ProjectStatus } from '../../../enum/project-status';
import { ProjectService } from '../../../services/project.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '../../../services/skills.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  dataForm! : FormGroup;
  showModal: boolean = false;
  projectList: Project[] = [];
  pageSize: number = 10;
  pageIndex:number = 1;
  myProject: any[]=[];
  allSkills: any[]=[];
  pathId: any = '';
  constructor(
    private fb: FormBuilder,
    private projectService :ProjectService,
    private notification: NzNotificationService,
    private activatedRoute: ActivatedRoute,
    private skillService :SkillsService,
    
  ) {}
  ngOnInit(): void {
    this.initModule();  
    this.getAll();
    this.allSkill();
  
  }
  initModule() {
    this.dataForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],   
      technologies: [null, Validators.required],   
      projectUrl: [null, Validators.required],   
      imageUrl: [null, Validators.required],   
      status: [null],   
      skills: [null],   
     
  
    });
  }
  open(): void {
    this.showModal = true;
  }
  onCancel(){
    this.showModal = false;
  }
  onSubmit(){
    if (this.dataForm.invalid) {
      this.notification.create(
        'warning',
        'Data Invalid',
        'Please complete the required fields'
      );
    } else {
      const formData = { ...this.dataForm.value, _id: this.pathId };
      if (this.pathId) {
        this.skillService.edit(formData).subscribe(
          (res) => {
            this.notification.create('success', 'Successfully updated', res.message);
            this.getAll(); 
            this.showModal = false;
            this.pathId = '';
            this.dataForm.reset();
          },
          (err) => {
            this.notification.create('error', 'Failed', err.message);
          }
        );
      } else {
        this.addData(this.dataForm.value);
      }
    }
  }

  allProjects: Select[] =[
    {
      value: ProjectStatus.Completed,
      viewValue: 'Completed',
 
    },
    {
      value: ProjectStatus.InProgress,
      viewValue: 'In Progress',
    
    },
    {
      value:ProjectStatus.Planned,
      viewValue: 'Planned',
    
    }
   
  
  ]

  addData(data:Project) {
    this.projectService.add(data)
   .subscribe(res => {
    this.notification.create('success', 'Sucessfully added', res.message);
    this.dataForm.reset();
    this.showModal=false;
    this.ngOnInit();
  
   }, (err) => {
    this.notification.create(
      'error',
      'Failed',
      err.error.message
    );
   })
 }

 allSkill() {
  this.skillService.getAll()
  .subscribe((res) => {
 this.allSkills =res.data
console.log(this.allSkills);
  }, err => {

  })
}

 getAll() {
  this.projectService.getAll()
  .subscribe((res) => {
 this.myProject = res.data
console.log(this.myProject);
  }, err => {

  })
}


deleteProject(id:any) {
  this.projectService.delete(id).subscribe(
    (res) => {
      this.ngOnInit();
      this.notification.create('success', 'Delete project', res.message);
    },
    (err) => {
      console.log(err);
    }
  );
}

editData(data: Project) {
  this.projectService.edit(data).subscribe(
    (res) => {
      this.notification.create(
        'success',
        'successfully updated',
        res.message
      );
    },
    (err) => {
      this.notification.create('error', 'Failed', err.message);
    }
  );
}

getById(id: string | null) {
  this.projectService.getById(id).subscribe(
    (res) => {
      this.showModal = true;
      this.pathId = res.data._id;
      this.dataForm.patchValue(res.data);
    },
    (err) => {
      this.notification.create('error', 'Failed', err.message);
    }
  );
}


}
