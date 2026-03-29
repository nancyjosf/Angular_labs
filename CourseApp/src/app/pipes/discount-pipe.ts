import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, disc: number = 0): number {
    if (!Number.isFinite(value)) {
      return 0;
    }

    const normalizedDiscount = Math.min(Math.max(disc, 0), 1);
    const discountedPrice = value - value * normalizedDiscount;
    return Math.round(discountedPrice * 100) / 100;
  }
}
