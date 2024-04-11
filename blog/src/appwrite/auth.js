import { Client, ID, Account} from "appwrite";
import conf from "../conf/conf";

class AuthService {

    client = new Client();
    account;

    constructor(){

        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                //call another method
                return this.login({email,password});
            }else{
                return null
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        // eslint-disable-next-line no-useless-catch
        try{
            return await this.account.createEmailSession(email,password);
        }catch(e){
            throw e;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log('Appwrite service :: getCurrentUser error',error);
        }
        
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        }
        catch(e){
            console.log('Appwrite service :: logout ::error',e);
        }
    }

}

const authService = new AuthService();

export default authService;