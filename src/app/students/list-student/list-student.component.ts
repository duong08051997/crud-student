import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getAll();
  }
delete(id: number): void{
    this.studentService.delete(id);
}
}
