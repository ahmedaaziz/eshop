import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss']
})
export class SelectedProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public productImages:string[] = [
    '../../../assets/images/1.png',
    '../../../assets/images/2.png',
    '../../../assets/images/3.png',
    '../../../assets/images/4.png',
  ];
  thumbsSwiper: any;
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
