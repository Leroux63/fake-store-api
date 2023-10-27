import {Product, ProductHttp} from "../models/product.ts";
import BaseService from "./base.service.ts";

class ProductService extends BaseService<Product, ProductHttp>{

    constructor() {
        super('products');
    }


    fromJSON(productHttp: ProductHttp):Product{
        return Product.fromJSON(productHttp)
    }
}


export default new ProductService();