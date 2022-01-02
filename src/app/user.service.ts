import Data from "../app/users tr.json";

interface User {
    _id:string;
    picture:string;
    balance:string;
    phone:string;
    about:string;
    age:number;
    address:string;
    company:string;
    email:string;
    name:string;
    registered:string;
    tags:string[];
}
export class interService {
    
    private static uss:User[] = Data;
    public getUss(): User[] {
        return interService.uss;
    }

    public static findUser(id :string): number {
        for (let index = 0; index < interService.uss.length; index++) {
            if(id === interService.uss[index]._id){
                return index;
            }
        }
        return -1;
    }
    
    public static getUs(index : number) : User {
        return interService.uss[index];
    }
}
