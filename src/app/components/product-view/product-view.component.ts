import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetProductDataService } from 'src/app/shared/services/get-product-data.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  products:any = [];
  isBoxAvailable:boolean = true;
  constructor(
    private _getProducts: GetProductDataService,
    private _router :Router) { }

  ngOnInit(): void {
  this._getProducts.getProductsList().subscribe(res=>{
    this.products = res;
    console.log(this.products);

  });


}
onSelect(item:any){
  this._router.navigate(['product',item.id ])
}
changeBoxStatus(){
  console.log('Clicked');

  this.isBoxAvailable = !this.isBoxAvailable;
}
}
