import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProducts } from '../../core/interfaces/iproducts';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Icategory } from '../../core/interfaces/icategory';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import {  NgClass} from '@angular/common';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { ToastrService } from 'ngx-toastr';
import { ProductComponent } from "../product/product.component";
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink, FormsModule, SearchPipe, TermtextPipe, NgClass, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private readonly _ProductsService = inject(ProductsService)
  private readonly _CategoriesService = inject(CategoriesService)
  private readonly _CartService = inject(CartService)
  private readonly _ToastrService = inject(ToastrService)
  productList:IProducts[]=[]
  categoryList:Icategory[]=[]
  getAllProductSub!:Subscription
  getAllCategoriesSub!:Subscription;
  text:string = ''
  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true
  }
  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  ngOnInit(): void {

    this.getAllCategoriesSub = this._CategoriesService.getAllCategories().subscribe({
      next:(res)=>{
        this.categoryList = res.data
        console.log(res.data)
      }
    })

  }
  
}
