import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

   private Categories: { id: number; name: string }[] = [
    { id: 1, name: 'Programming' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Business' },
  ];
  
  getAllCategories() {
    return this.Categories;
  } 

}
