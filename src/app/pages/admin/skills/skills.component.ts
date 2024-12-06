import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from '../../../interface/skills';
import { SkillsService } from '../../../services/skills.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Select } from '../../../interface/select';
import { SkillLevel } from '../../../enum/skill-level';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  dataForm : FormGroup;
  pathId: any = '';
  showModal: boolean = false;
  skillList: Skills[] = [];
  pageSize: number = 10;
  pageIndex:number = 1;
  allSkills: any[]=[];
  constructor(
    private fb: FormBuilder,
    private skillService :SkillsService,
    private notification: NzNotificationService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      level: [null, Validators.required],   
      category: [null, Validators.required],   
      iconUrl: [null],   
      description: [null],    
    });
  }
  ngOnInit(): void {
   
 this.getAll();
  }
  allSkill: Select[] =[
    {
      value: SkillLevel.Beginner,
      viewValue: 'Beginner',
 
    },
    {
      value: SkillLevel.Intermediate,
      viewValue: 'Intermediate',
    
    },
    {
      value:SkillLevel.Advanced,
      viewValue: 'Advanced',
    
    },
    {
      value: SkillLevel.Expert,
      viewValue: 'Expert',
    
    },
  
  ]
  open(): void {
    this.showModal = true;
  }
  onCancel(){
    this.ngOnInit();
    this.showModal = false;
    this.pathId= '';
    this.dataForm.reset();
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
  addData(data: Skills) {
    this.skillService.add(data)
   .subscribe(res => {
    this.notification.create('success', 'Sucessfully added', res.message);
    this.dataForm.reset();
    this.showModal=false;
  
   }, (err) => {
    this.notification.create(
      'error',
      'Failed',
      err.error.message
    );
   })
 }


 getAll() {
  this.skillService.getAll()
  .subscribe((res) => {
 this.allSkills =res.data
console.log(this.allSkills);
  }, err => {

  })
}


deleteSkill(id:any) {
  this.skillService.delete(id).subscribe(
    (res) => {
      this.ngOnInit();
      this.notification.create('success', 'Delete skill', res.message);
    },
    (err) => {
      console.log(err);
    }
  );
}


editData(data: Skills) {
  this.skillService.edit(data).subscribe(
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
  this.showModal = true;
  this.skillService.getById(id).subscribe(
    (res) => {
      console.log(res)
     
      this.pathId = res.data._id;
      this.dataForm.patchValue(res.data);
    },
    (err) => {
      this.notification.create('error', 'Failed', err.message);
    }
  );
}
}
