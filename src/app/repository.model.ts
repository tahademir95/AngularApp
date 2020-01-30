import { SimpleDataSource } from './datasource.model';
import { Product } from './product.model';


//add-delete-update ... etc methods are written to this class
export class ProductRepository{

    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product {
        return this.products.find(p=> p.id == id);
    }

    getProductCount():number{
        return this.products.length;
    }

}