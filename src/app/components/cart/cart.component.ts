import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  private unSub$: Subject<void> = new Subject<void>();

  public cartList: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.cartList = JSON.parse(localStorage.getItem('cartItems') as any) ?? [];
  }

  ngOnDestroy(): void {
    this.unSub$.next();
    this.unSub$.complete();
  }

  public removeProduct(product: any): void {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') as any) ?? [];
    const index = cartItems.findIndex((val: any) => val.productName == product.productName);
    cartItems.splice(index, 1);
    this.cartList = JSON.parse(JSON.stringify(cartItems));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  public purchaseOrder() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') as any) ?? [];
    this.apiService.purchaseCart(cartItems).pipe(takeUntil(this.unSub$)).subscribe((res: any) => {
      if (res?.success) {
        this.cartList = [];
        localStorage.setItem('cartItems', JSON.stringify([]));
        alert('Products purchased successfully!');
        this.router.navigateByUrl('/product-list');
      } else {
        alert(res?.message);
      }
    }, (error) => {
      alert(error?.error);
    });
  }
}
