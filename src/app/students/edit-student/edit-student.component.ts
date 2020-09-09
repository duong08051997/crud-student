import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  formEditStudent: FormGroup;
  id = + this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const student = this.studentService.getStudentById(this.id);
    this.formEditStudent = this.fb.group({
      id: [student.id],
      name: [student.name],
      age: [student.age],
      gender: [student.gender],
      address: [student.address],
      email: [student.email]
    });
  }
edit(): void{
    this.studentService.edit(this.formEditStudent.value, this.id);
    this.router.navigate(['/students']);
}
}
