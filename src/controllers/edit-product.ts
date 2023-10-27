import ProductService from "../services/product.service.ts";
import {Product} from "../models/product.ts";


const queryString = window.location.search
const params = new URLSearchParams(queryString)
const id = parseInt(params.get('id')!)


ProductService
    .getOne(id)
    .then((product: Product) => {
        const inputTitle = document.querySelector('#title')
        const textAreaDescription = document.querySelector('#description')
        const inputPrice = document.querySelector('#price')

        if (inputTitle) inputTitle.value = product.title
        if (textAreaDescription) textAreaDescription.value = product.description
        if (inputPrice) inputPrice.value = product.price

        const form = document.querySelector('#edit-product-form')
        form?.addEventListener('submit', (e) => {
            e.preventDefault()
            const formData = new FormData(e.target as HTMLFormElement)
            if(formData.get('title')) product.title = formData.get('title') as string
            if(formData.get('description')) product.description = formData.get('description') as string
            if(formData.get('price')) product.price = parseFloat(formData.get('price')as string)

            ProductService
                .updateById(id, product)
                .then(()=>{
                    window.location.href = '/index.html'
                })

        })


    })

