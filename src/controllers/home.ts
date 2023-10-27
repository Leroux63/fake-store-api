import ProductService from "../services/product.service.ts";
import {Product} from "../models/product.ts";
import CategoryService from "../services/category.service.ts";

import {Category} from "../models/category.ts";
import UserService from "../services/user.service.ts";
import {User} from "../models/user.ts";
const tbody = document.querySelector('tbody')
const ubody = document.querySelector('#ubody')
// const ubody = document.querySelector('')
ProductService
    .getAll()
    .then((products: Product[]) => {
        products.forEach(p => {
            const tr = document.createElement('tr')
            const tdId = document.createElement('td')
            tdId.textContent =`${p.id}`
            const tdTitle = document.createElement('td')
            tdTitle.textContent =`${p.title}`
            tdTitle.classList.add('col-6')
            const tdPrice = document.createElement('td')
            tdPrice.textContent = `${p.price}€`
            const tdRating = document.createElement('td')
            tdRating.textContent = `Note ${p.rating.rate} / Nb d'avis ${p.rating.count}`

            const tdAction = document.createElement('td')

            const linkShowProduct = document.createElement('a')
            linkShowProduct.href = `/src/views/product.html?id=${p.id}`
            linkShowProduct.textContent = 'VOIR'
            linkShowProduct.classList.add('btn','btn-primary','text-uppercase','m-1')

            const linkEditProduct = document.createElement('a')
            linkEditProduct.href = `/src/views/edit-product.html?id=${p.id}`
            linkEditProduct.textContent = 'MODIFIER'
            linkEditProduct.classList.add('btn','btn-warning','text-uppercase','m-1')

            const buttonDeleteProduct = document.createElement('button')
            buttonDeleteProduct.type = 'submit'
            buttonDeleteProduct.addEventListener('click', () => {
               ProductService.deleteOne(p.id)
                   .then(()=>{
                   tr.remove()
               })
            })
            buttonDeleteProduct.textContent = 'SUPPRIMER'
            buttonDeleteProduct.classList.add('btn','btn-danger')

            tdAction.append(linkShowProduct,linkEditProduct,buttonDeleteProduct)

            tr.append(tdId,tdTitle,tdPrice,tdRating, tdAction)
            tbody!.appendChild(tr)



        })

    })
// ProductService
//     .getOne(5).then(p =>
//         console.log(p))



const ul =document.querySelector('ul')
CategoryService
    .getAll()
    .then((categories: Category[]) => {
        categories.forEach(c => {
            const li = document.createElement('li');
            li.textContent = c;
            ul!.append(li);
        });
    });

UserService
    .getAll()
    .then((users: User[])=>{
        users.forEach(u =>{
            const tr = document.createElement('tr')
            const tId = document.createElement('td')
            tId.textContent =`${u.id}`
            const tMail = document.createElement('td')
            tMail.textContent =`${u.email}`
            const tUsername = document.createElement('td')
            tUsername.textContent =`${u.username}`
            const tPassword = document.createElement('td')
            tPassword.textContent =`${u.password}`
            const tFullName = document.createElement('td')
            tFullName.textContent =`${u.fullname}`
            const tAdress = document.createElement('td')
            tAdress.textContent =`${u.address}`
            const tPhone = document.createElement('td')
            tPhone.textContent =`${u.address}`



            tr.append(tId,tMail,tUsername,tPassword,tFullName,tAdress,tPhone)
            ubody!.appendChild(tr)
            // console.log(u)
        })
    })


