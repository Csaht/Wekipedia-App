import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReadService {
  selectedDataItem: any;
  redirectItem: any;
  fivoriteItemd: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {}
  getApi(searchTerm: any) {
    return this.http.get(
      `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchTerm}&format=json`
    );
  }

  selectedData(item: any) {
    this.selectedDataItem = item;
  }

  redirectTrueApi(redir: any) {
    this.redirectItem = this.http.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${redir}`
    );
    console.log('redirectItem in service', this.redirectItem);
    return this.redirectItem;
  }
  fivoriteItem(redir: any) {
    return (this.fivoriteItemd = this.http.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${redir}`
    ));
  }
}
