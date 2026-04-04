import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private courses: Course[] = [
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

    getAllCourses(): Course[] {
      return this.courses;
    }

    getCoursesByCategory(categoryId: number): Course[] {
      if (categoryId === 0) {
        return this.courses;
      }
      return this.courses.filter(course => course.catId === categoryId);
    }

    getCourseById(courseId: number): Course | null {
      let foundcourse = this.courses.find(course => course.id === courseId);
      return (foundcourse)? foundcourse : null;
    }

}
