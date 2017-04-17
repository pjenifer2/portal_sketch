import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';



@Component({
    moduleId: module.id,
    templateUrl: 'product-nest.component.html',
    styleUrls: ['product-nest.component.css']
})

export class ProductNestComponent implements OnInit{
    pageTitle: string = 'Rogue One Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    cards: boolean = true;
    products: IProduct[];
    

    constructor(private _productService: ProductService){
                
    }

    toggleImage():void {
        this.showImage = !this.showImage;
        this.cards = !this.cards;
    }

    ngOnInit():void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }

  

}