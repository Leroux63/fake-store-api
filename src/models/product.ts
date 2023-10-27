export interface ProductHttp {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export interface Product {
    id: number
    title: string
    price: number
    category: Product.Category | undefined
    description: string
    image: string
    rating: {
        rate: number
        count: number
    }


}

export namespace Product {
    export enum Category {
        ELECTRONICS = 'electronics',
        JEWELERY = 'jewelery',
        MENS_CLOTHING = 'men\'s clothing',
        WOMENS_CLOTHING = 'women\'s clothing'
    }

    export function fromJSON(productHttp: ProductHttp): Product {
        const indexCategory = Object.values(Category).indexOf(productHttp.category as unknown as Category)

        return {
            id: productHttp.id,
            title: productHttp.title,
            price: productHttp.price,
            category: indexCategory > -1 ? Object.keys(Category)[indexCategory] as Category : undefined,
            description: productHttp.description,
            image: productHttp.image,
            rating: {
                rate: productHttp.rating.rate,
                count: productHttp.rating.count
            }
        }
    }
}