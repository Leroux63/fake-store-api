export interface UserHttp{
    id: number
    email: string
    username: string
    password: string
    name: {
        firstname : string
        lastname : string
    }
    address: {
        city : string
        street : string
        number : number
        zipcode: string
        geolocation : {
            lat : number
            long : number
        }
    }
    phone : string
}

export interface User{
    id: number
    email: string
    username: string
    password: string
    fullname: string
    address: string
    phone : string
}

export namespace User {
    export function fromJSON(userHttp: UserHttp): User{
        return{
            id: userHttp.id,
            email: userHttp.email,
            username : userHttp.username,
            password : userHttp.password,
            fullname :`${userHttp.name.firstname} ${userHttp.name.lastname}`,
            address : `${userHttp.address.number} ${userHttp.address.street} ${userHttp.address.zipcode} ${userHttp.address.city}`,
            phone : userHttp.phone
        }
    }
}