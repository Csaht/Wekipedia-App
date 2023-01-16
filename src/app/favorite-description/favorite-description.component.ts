import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadService } from '../read.service';
//import { Product } from './showContent.model';

@Component({
  selector: 'app-favorite-description',
  templateUrl: './favorite-description.component.html',
  styleUrls: ['./favorite-description.component.css'],
})
export class FavoriteDescriptionComponent implements OnInit {
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readService: ReadService
  ) {}

  ngOnInit(): void {
    let a = this.readService.fivoriteItemd.subscribe((product: any) => {
      console.log(
        'fivorite Item Description from favorite description',
        product
      );
      this.product = product;
    });
    console.log('achha', a);
    console.log('act from favo desc', this.activatedRoute.snapshot.params);
  }
}
