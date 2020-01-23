
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
    
    onSubmit($event){
        $event.stopPropagation();       //butonlar div içinde olduğu için, butona tıklandığında div de tıklanmış oluyor, bu onu engelliyor
        console.log('button is clicked');
        console.log($event);
    }
    onDivClicked(){
        console.log('div is clicked');
    }

    onKeyUp($event){

        console.log($event.target.value);

        if($event.keyCode === 13){
            console.log("enter was pressed");
        }
        else if($event.keyCode === 32){
            console.log("space was pressed");
        }
    }

    onKeyUp2(email){
        console.log(email);
    }
    
}
