import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../product-list/product.model';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private ps:ProductService) { }
  productItem= new IProduct(null,null,null,null,null,null,null,null);

  ngOnInit() {
  }
  AddProducts()
  {
    console.log(this.productItem)
    this.ps.newProduct(this.productItem)
    alert("success");
  }

}
