export type Category = string


export type CategoryHttp = string

export namespace Category {
    export function fromJSON(categoryHttp: CategoryHttp): Category {
        return categoryHttp;
    }

}










