import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { AddProductsComponent } from '../components/add-products/add-products.component';
const routes:Routes=[
  {path:'',component:ProductListComponent},
  {path:'add-products',component:AddProductsComponent}


];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
