import { Course } from './../../model/course';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-courses',
  imports:[CommonModule, FormsModule, NgClass],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  selectedCategoryId: number = 0;

  Categories: { id: number; name: string }[] = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Programming' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Business' },
  ];

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular for Beginners',
      instructor: 'John Doe',
      price: 99.99,
      seats: 3,
      Image: 'https://placehold.co/600x400/dd0031/white?text=Angular+Core',
      catId: 1,
      category: 'Programming',
    },
    {
      id: 2,
      title: 'UI Design Fundamentals',
      instructor: 'Jane Smith',
      price: 89.99,
      seats: 2,
      Image: 'https://placehold.co/600x400/ff7a59/white?text=UI+Design',
      catId: 2,
      category: 'Design',
    },
    {
      id: 3,
      title: 'Digital Marketing 101',
      instructor: 'Emily Johnson',
      price: 79.99,
      seats: 0,
      Image: 'https://placehold.co/600x400/0ea5e9/white?text=Marketing',
      catId: 3,
      category: 'Marketing',
    },
    {
      id: 4,
      title: 'Business Strategy Basics',
      instructor: 'Michael Brown',
      price: 120.0,
      seats: 10,
      Image: 'https://placehold.co/600x400/111827/white?text=Business',
      catId: 4,
      category: 'Business',
    },
    {
      id: 5,
      title: 'React for Beginners',
      instructor: 'Nancy Youssef',
      price: 95.0,
      seats: 1,
      Image: 'https://placehold.co/600x400/61dbfb/0f172a?text=React+JS',
      catId: 1,
      category: 'Programming',
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      instructor: 'Rana Hany',
      price: 105.0,
      seats: 8,
      Image: 'https://placehold.co/600x400/ec4899/white?text=Brand+Design',
      catId: 2,
      category: 'Design',
    },
    {
      id: 7,
      title: 'Flutter Mobile App',
      instructor: 'Hany Ahmed',
      price: 130.00,
      seats: 12,
      Image: 'https://placehold.co/600x400/02569B/white?text=Flutter+UI',
      catId: 4,
      category: 'Programming',
    },
    {
      id: 8,
      title: 'SQL Databases Mastery',
      instructor: 'Tadros Gamal',
      price: 95.00,
      seats: 5,
      Image: 'https://placehold.co/600x400/00758F/white?text=SQL+Mastery',
      catId: 5,
      category: 'Business',
    },
    {
      id: 9,
      title: 'Cyber Security Basics',
      instructor: 'Rana Hany',
      price: 140.00,
      seats: 0, 
      Image: 'https://placehold.co/600x400/000000/red?text=Cyber+Security',
      catId: 6,
      category: 'Business',
    }
    
  ];

  Register(id: number, seats: number): void {
    if (seats <= 0) {
      return;
    }

    const course = this.courses.find((c) => c.id === id);
    if (course && course.seats > 0) {
      course.seats--;
    }
  }
}
