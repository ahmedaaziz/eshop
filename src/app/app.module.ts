import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NewsletterSubscribeComponent } from './shared/newsletter-subscribe/newsletter-subscribe.component';
import { ProductImagesSliderComponent } from './components/product-images-slider/product-images-slider.component';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    FooterComponent,
    ProductPageComponent,
    NewsletterSubscribeComponent,
    ProductImagesSliderComponent,
    SelectedProductsComponent,
    ProductViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
