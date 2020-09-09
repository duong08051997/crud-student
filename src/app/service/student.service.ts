import { Injectable } from '@angular/core';
import {IStudent} from '../interface/istudent';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: IStudent[] = [
    {
      id: 1,
      name: 'duong',
      age: 18,
      gender: 'male',
      address: 'bac giang',
      email: 'duong@gmail.com'
    },
    {
      id: 2,
      name: 'luc',
      age: 18,
      gender: 'female',
      address: 'nam dinh',
      email: 'luc@gmail.com'
    },
    {
      id: 3,
      name: 'cuong',
      age: 18,
      gender: 'male',
      address: 'ha noi',
      email: 'cuong@gmail.com'
    },
    {
      id: 4,
      name: 'manh',
      age: 18,
      gender: 'female',
      address: 'ha noi',
      email: 'manh@gmail.com'
    },
    {
      id: 5,
      name: 'tung',
      age: 18,
      gender: 'male',
      address: 'bac ninh',
      email: 'tung@gmail.com'
    },
    {
      id: 6,
      name: 'viet anh',
      age: 18,
      gender: 'female',
      address: 'ha noi',
      email: 'anh@gmail.com'
    },
    {
      id: 7,
      name: 'quang',
      age: 18,
      gender: 'female',
      address: 'ha nam',
      email: 'quang@gmail.com'
    }
  ];

  constructor() { }
  getAll(): IStudent[]{
    return this.students;
  }
  findId(id: number): number{
    return this.students.findIndex(item => item.id === id);
  }
  getStudentById(id: number): IStudent{
    const index = this.findId(id);
    return this.students[index];
  }
  delete(id: number): void{
    const index = this.findId(id);
    this.students.splice(index, 1);
  }
  add(student: IStudent): void{
    this.students.push(student);
  }
  edit(student: IStudent, id: number): void{
    const index = this.findId(id);
    this.students.splice(index , 1 , student);
  }
}
