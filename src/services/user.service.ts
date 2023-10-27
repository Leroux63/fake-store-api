import {User, UserHttp} from "../models/user.ts";
import BaseService from "./base.service.ts";
class UserService extends BaseService<User, UserHttp> {

    constructor() {
        super('users')
    }

    fromJSON(userHttp: UserHttp): User {
        return User.fromJSON(userHttp)
    }

}

export default new UserService();
