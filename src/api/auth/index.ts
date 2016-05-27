
import {IAuth} from './IAuth'

class AuthAPI implements IAuth {

    constructor (){

    }

    login() {
        //fixme

    }
    logout() {
        //fixme

    }

    test (astring: string){

        console.log('you give : '+astring);

        return true;
    }


}

export default AuthAPI;
