

export default abstract class BaseService<Type, TypeHttp> {


    protected baseUrl = 'https://fakestoreapi.com'
    protected resource: string


    constructor(resource: string) {
        this.resource = resource
    }


    abstract fromJSON(typeHttp: TypeHttp): Type

    getAll(): Promise<Type[]> {
        return fetch([this.baseUrl, this.resource].join('/'))
            .then(res => res.json())
            .then((typesHttp: TypeHttp[]) => {
                return typesHttp.map(typeHttp => this.fromJSON(typeHttp));
            })

    }

    getOne(id: number): Promise<Type> {

        return fetch([this.baseUrl, this.resource, id].join('/'))

            .then(res => res.json())
            .then((typeHttp: TypeHttp) => {
                return this.fromJSON(typeHttp)
            })
    }

    updateById(id:number , editedType: Type): Promise<void>{
        return  fetch([this.baseUrl, this.resource, id].join('/'),
            {
                method: 'PUT',
                body: JSON.stringify(editedType)
            })
            .then(res => res.json())

    }
    deleteOne(id: number): Promise<void> {
        return  fetch([this.baseUrl, this.resource, id].join('/'),
            {
                method: 'DELETE'
            })
            .then(res => res.json())


    }




}