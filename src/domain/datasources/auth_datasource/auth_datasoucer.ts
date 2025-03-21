import { Login, Logout, Register, resetPassword } from "../../domain";


export abstract class AuthDatasource{


    abstract login(
        email: string, 
        password: string): Promise<Login>;

    abstract register(
        email: string, 
        password: string,
        passwordConfium: string,
        completName:string,
        numberDocument:string,
        typeDocument:string,
        countrycode:string,
        dataofBirth:string,
    ): Promise<Register>;
    
    abstract logout(): Promise<Logout>;

    abstract resetPassword(email: string): Promise<resetPassword>;

}