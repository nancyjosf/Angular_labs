import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Courses } from '../courses/courses';
import { CategoriesService } from '../../services/categories-service';
import { inject } from '@angular/core';
@Component({
  selector: 'app-order',
  imports: [FormsModule, Courses],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
private CategoriesService=inject(CategoriesService);

 Categories: { id: number; name: string }[] = this.CategoriesService.getAllCategories();


  selectedCategoryId: number = 0;
   totalprice: number = 0;
  setTotalOrederPrice(recivedPrice: number) {
   this.totalprice = recivedPrice;
  }
}
