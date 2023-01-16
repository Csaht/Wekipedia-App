import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteDescriptionComponent } from './favorite-description/favorite-description.component';
import { HomeComponent } from './home/home.component';
//import { ProductComponent } from './product/product.component';
import { ShowContentComponent } from './show-content/show-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favoriteItem/:id', component: FavoriteDescriptionComponent },
  { path: 'show_content', component: ShowContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
