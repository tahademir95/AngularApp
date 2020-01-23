
import{ Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: "app",
    template: `
        {{ text | summary }}
        <br/>
        {{ text | summary: 15 }}
        `,
    styleUrls: [
        "product.component.css"
    ]
})
export class ProductComponent {
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    
}
