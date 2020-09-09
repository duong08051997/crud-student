import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  formAddStudent: FormGroup;
  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddStudent = this.fb.group({
      id: [''],
      name: [''],
      age: [''],
      gender: [''],
      address: [''],
      email: ['']
    });
  }
  add(): void{
    this.studentService.add(this.formAddStudent.value);
    this.router.navigate(['/students']);
  }

}
