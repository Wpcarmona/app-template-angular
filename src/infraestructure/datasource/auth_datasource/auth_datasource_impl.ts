import { axiosInstance } from "../../../config/config";
import { AuthDatasource, Login, Logout, Register, resetPassword } from "../../../domain/domain";


export class AuthDatasourceImpl extends AuthDatasource{
   
    

    override async login(email: string, password: string): Promise<Login> {
        
        try {
            const response = await axiosInstance.post('/auth/login', {
                email,
                password
            });
            return response.data;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    override async register(email: string, password: string, passwordConfium: string, completName: string, numberDocument: string, typeDocument: string, countrycode: string, dataofBirth: string): Promise<Register> {
        try {
            const response = await axiosInstance.post('/auth/register', {
                email,
                password,
                passwordConfium,
                completName,
                numberDocument,
                typeDocument,
                countrycode,
                dataofBirth
            });
            return response.data;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    override async logout(): Promise<Logout> {
       try {
         const response = await axiosInstance.post('/auth/logout');
         return response.data;
       } catch (error) {
        throw new Error("Method not implemented.");
       }
    }


    override async resetPassword(email: string): Promise<resetPassword> {
        try {
            const response = await axiosInstance.post('/auth/reset-password', {
                email
            });
            return response.data;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    
}