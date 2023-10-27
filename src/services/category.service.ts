import {Category, CategoryHttp} from "../models/category.ts";
import BaseService from "./base.service.ts";
class CategoryService extends BaseService<Category,CategoryHttp>{

    constructor(){
        super('products/categories')
    }

    fromJSON(categoryHttp: CategoryHttp):Category{
        return Category.fromJSON(categoryHttp)
    }

}
export default new CategoryService();
