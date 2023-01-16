import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './customePipe/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ShowContentComponent } from './show-content/show-content.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './userReducers/userReducers';
import { FavoriteDescriptionComponent } from './favorite-description/favorite-description.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, FilterPipe, ShowContentComponent, FavoriteDescriptionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
     MatInputModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    StoreModule.forRoot({product: addProductReducer})
   
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
