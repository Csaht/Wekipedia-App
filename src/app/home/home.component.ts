import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadService } from '../read.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  apiData: any;
  required_Val_arr: any;
  default_text:boolean = true
  favoritesList: boolean = false;
  serchSection: boolean = true;
  myForm: any;
  a: any;
  favoriteItem: any;
  favoriteItems: any;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private readSevice: ReadService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      search: [],
    });

    this.favoriteItem = this.store.select((state) => state.product);
    this.favoriteItem.subscribe((res: any) => {
      console.log('result...... in home Content', res);
      this.favoriteItem = res;
    });
  }
  serchFunc() {
    this.a = this.myForm.get('search').value;
    console.log('i am on call searchFunc', this.a);

    this.readSevice.getApi(this.a).subscribe((item) => {
      console.log('search regarding', item);
      this.apiData = item;
      this.required_Val_arr = this.apiData.query.search;
    });
  }

  redirectToPage(item: any) {
    this.readSevice.selectedData(item);
  }

  secondApi(Title: any) {
    this.router.navigateByUrl('show_content');
    this.readSevice.redirectTrueApi(Title);
  }

  myFavoritesList() {
    this.favoritesList = true;
    this.serchSection = false;
    this.default_text = false
  }
  mySerchSection() {
    this.serchSection = true;
    this.favoritesList = false;
  }

  favoriteItemDescription(data: any) {
    this.router.navigateByUrl('/favoriteItem/' + data.pageid);
    //  this.id = this.activatedRoute.snapshot.params
    //  console.log("id",this.id);

    this.readSevice.fivoriteItem(data.title).subscribe((item: any) => {
      console.log('favoriteItemDescription', item);
      this.favoriteItems = item;
    });
  }
}
