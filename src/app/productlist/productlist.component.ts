import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  products:[];

  loadProducts(){
    this.productService.getProducts().subscribe((res)=>{
      this.products = res;
    });
  }

}
