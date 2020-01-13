
import{ Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: [
        "product.component.css"
    ]
})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    disabled = false;
    color:string = this.model.getProductById(1).price > 3000 ? "red" : "green";
    fontWeight: string = "bold";

    getClasses(id: number): string {
        let product = this.model.getProductById(id);
        return (product.price <= 3000 ? "bg-info": "bg-secondary") + " m-2 p-2";    //product ın ücreti 3000 den küçükse bg-info, değilse bg-secondary
    }

    getClassMap(id: number): Object{
        let product = this.model.getProductById(id);
        return{
            "bg-info": product.price <= 3000,
            "bg-secondary": product.price > 3000,
            "text-center text-white": product.name == "Samsung Note5"
        }
    }

    getStyles(id: number) {
        let product = this.model.getProductById(id);
        return {
            fontSize: "25px",
            color: product.price <=3000 ? "green" : "red"
        }
    }
    
}