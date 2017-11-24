//# sourceMappingURL=app.component.js.map
import { Component } from '@angular/core'
import { IProduct} from './product';
import { ProductService } from './product.service';


@Component({
    moduleId : module.id,
    selector : 'pm-productlist',
    
    templateUrl: './product-list.component.html'
   // ,sytleUrls:['./product-list.component.css']
}
)

export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: IProduct[] = [];
    errorMessage : String;
    
    //_productService : ProductService;
    constructor(private _productService : ProductService) { }


    showImage : boolean = false;
    toggleImage(){
        this.showImage=!this.showImage;
    }


ngOnInit():void{
    this._productService.getProducts()
    .subscribe(products => {
            this.products = products;
        },
        error => this.errorMessage = <any>error);
   
}

}
