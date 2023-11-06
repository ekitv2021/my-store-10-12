import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaceCharacterPipe } from './replace-character.pipe';
import { DiscountedPricePipe } from './discounted-price.pipe';
import { HighlightDirective } from './highlight.directive';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultComponent } from './calculator/result/result.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewComponent } from './review/review.component';

//** -> wild card to specify any character
const routes: Routes = [
  {path: "home", component: HomeComponent, title:'MyStore | Home'},
  {path: "products", component: ProductListComponent, title:'MyStore | Products'},
  {path: "calculator", component: CalculatorComponent, title:'MyStore | Calculator'},
  {path: "profile", component: ProfileComponent, title:'MyStore | Profile'},
  {
    path: "products/:id", 
    component: ProductDetailsComponent, 
    title: 'MyStore | Product Details',
    children: [
      {
        path:'review',
        component: ReviewComponent,
        title: 'MyStore | Review'
      }
    ]
  },
  {path: "", redirectTo:"/products", pathMatch:'full'},
  {path: "**", component: PageNotFoundComponent, title:'MyStore | Page Not Found'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ReplaceCharacterPipe,
    DiscountedPricePipe,
    HighlightDirective,
    CalculatorComponent,
    ResultComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
