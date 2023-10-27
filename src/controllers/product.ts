import {Product} from "../models/product.ts";
import ProductService from "../services/product.service.ts";

const queryString = window.location.search
const params = new URLSearchParams(queryString)
const id = parseInt(params.get('id')!)
const container = document.querySelector('.container')

ProductService
    .getOne(id)
    .then((product: Product)=>{
        console.log(product)

        const row = document.createElement('div')
        row.classList.add('mt-5','row')
        const col = document.createElement('div')
        col.classList.add('col-6')
        const img = document.createElement('img')
        img.src = `${product.image}`
        img.classList.add('w-100')
        const detail = document.createElement('div')
        detail.classList.add('col-6')
        const h1 = document.createElement('h1')
        h1.textContent = `${product.title}`
        const cat = document.createElement('h4')
        cat.textContent = `${product.category}`
        const description = document.createElement('p')
        description.textContent =`${product.description}`
        const price = document.createElement('p')
        price.textContent =`${product.price}€  Note ${product.rating.rate} /${product.rating.count}avis`

        col.appendChild(img)
        detail.append(h1,cat,description,price)
        row.append(col,detail)
        container!.appendChild(row)
    })



