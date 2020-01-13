import { Product } from './product.model';

export class SimpleDataSource {
    private products: Product[];

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung S5", "3 Yıldız", "image1.jpg", 2700),
            new Product(2, "Samsung Note5", "6 Yıldız", "image2.jpg", 3500),
            new Product(3, "Iphone 10", "10 Yıldız", "image3.jpeg", 8000),
            new Product(4, "Iphone 6S", "7 Yıldız", "image4.jpg", 5500)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}