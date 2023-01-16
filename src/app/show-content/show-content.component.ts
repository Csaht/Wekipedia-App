import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { ReadService } from '../read.service';
//import { ProductActionTypes, unfavoritee } from '../userAction/userAction';
import { Product } from './showContent.model';

@Component({
  selector: 'app-show-content',
  templateUrl: './show-content.component.html',
  styleUrls: ['./show-content.component.css'],
})
export class ShowContentComponent implements OnInit {
  receivedItem: any;
  favoriteList: any;
  //favoritesList:boolean = false
  products: Observable<Product[]>;
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private readService: ReadService
  ) {
    this.products = this.store.select((state) => state.product);
    this.products.subscribe((res) => {
      console.log('result......', res);
      // ***********
      this.favoriteList = res;
    });
  }
  ngOnInit() {
    this.readService.redirectItem.subscribe((item: any) => {
      console.log('redirect content', item);
      this.receivedItem = item;
    });
  }
  addProduct(item: any) {
    console.log('i am on favorite call in add product');
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        title: item.title,
        pageid: item.pageid,
        type: item.type,
        description: item.description,
      },
    });
  }

  removeProduct(item: any) {
    this.favoriteList;
    console.log('in removeProduct ', this.favoriteList);

    let arr: any[] = [item];
    console.log('this.receivedItem on unfavorite', arr);
    let del = delete arr[0];

    // let del = arr.pop()
    console.log('this.receivedItem after remove', del);
    console.log('this.receivedItem on unfavorite', arr);
  }
  descr(product: any) {
    this.router.navigateByUrl('favoriteItem');
    let a = this.readService.fivoriteItem(product).subscribe((product) => {
      console.log('fivorite Item Description from show content.ts', product);
    });
    // console.log("achha",a);
  }
  redirectHome() {
    
    this.router.navigateByUrl('');
   
  }
}
