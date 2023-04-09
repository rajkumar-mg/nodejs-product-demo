import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private unSub$: Subject<void> = new Subject<void>();

  public productList: any[] = [];
  public productSelectedQty: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  ngOnDestroy(): void {
    this.unSub$.next();
    this.unSub$.complete();
  }


  public getProductsList(): void {
    this.apiService.getProducList().pipe(takeUntil(this.unSub$)).subscribe((res: any) => {
      this.productList = Array.isArray(res) ? res : [];
    });
  }

  public addToCart(product: any): void {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') as any) ?? [];
    if (cartItems.length) {
      const index = cartItems.findIndex((val: any) => val.productName == product.productName);
      if (index > -1) {
        cartItems[index].purchasedQty += parseInt(this.productSelectedQty[product.productName]);
      } else {
        cartItems.push({ ...product, purchasedQty: parseInt(this.productSelectedQty[product.productName]) })
      }
    } else {
      cartItems.push({ ...product, purchasedQty: parseInt(this.productSelectedQty[product.productName]) })
    }

    this.productSelectedQty = [];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}
