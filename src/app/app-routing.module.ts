import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';

// The rested routes are added to the children property of their parent route.
// The paths for the children are relative to the path of their parent.

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'product', component: ProductComponent, 
    children: [
      {path: '', component: ProductDetailsComponent}, 
      {path: 'review', component:ProductReviewsComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
