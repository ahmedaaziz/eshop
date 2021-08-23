import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-product-images-slider',
  templateUrl: './product-images-slider.component.html',
  styleUrls: ['./product-images-slider.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ProductImagesSliderComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
