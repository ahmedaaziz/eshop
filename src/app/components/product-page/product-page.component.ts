import { Component, OnInit } from '@angular/core';
import { GetProductDataService } from 'src/app/shared/services/get-product-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public productInfo:any;
  public productList:any;
  public productId:any;
  constructor(
    private route:ActivatedRoute,
    private _getProduct:GetProductDataService
    ) {
    }

    ngOnInit(): void {
      console.log(this.route.snapshot.paramMap.get('id'));
      let id = this.route.snapshot.paramMap.get('id');
      this.productId = id;
      console.log('id is --> ', this.productId);
      this._getProduct.getProductsList().subscribe(res=>{
        this.productList = res;
        this.productInfo = this.productList[this.productId - 1];
        console.log(this.productInfo);

      });

    }


}
