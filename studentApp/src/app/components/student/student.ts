import { Component } from '@angular/core';
import { StudentItem } from './../../model/student';


@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  students: StudentItem[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      age: 20,
      photoUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 2,
      name: 'Nancy Youssef',
      age: 21,
      photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Bob Smith',
      age: 22,
      photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
    ,{
    id: 4,
    name: 'Sara Kalid',
    age: 22,
    photoUrl: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 5,
    name: 'John Doe',
    age: 24,
    photoUrl: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 6,
    name: 'Laila Hassan',
    age: 19,
    photoUrl: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    id: 7,
    name: 'Michael Brown',
    age: 23,
    photoUrl: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    id: 8,
    name: 'Amina Ali',
    age: 20,
    photoUrl: 'https://randomuser.me/api/portraits/women/8.jpg'
  }
];}