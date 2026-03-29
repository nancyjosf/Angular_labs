import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, disc: number = 0): number {
   const discountedPrice = value - (value * disc);
  return Math.round(discountedPrice * 100) / 100;
  }
}
