import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';
import { V4 as uuid } from 'uuid';


@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct( title: string, desc: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price );
        this.products.push(newProduct)
    }

    getProducts(){
        return [...this.products]
    }
    getSingleProduct(productId: string){
        const product = this.products.find((prod) => prod.id === productId)
        if (!product) {
            throw new NotFoundException('Could not find product');
        }
        return {...product}
    }
}