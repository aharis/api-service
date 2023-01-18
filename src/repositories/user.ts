import bCrypt from 'bcryptjs';
import { isAuthenticated } from "../midllewares/validations/security";
import { UserModelSchema } from "../models/user";
import { IUser } from '../utils/interfaces';

export class UserRepository {
  public static async getUserByEmail(email: string) {
    return UserModelSchema
      .findOne({ email })
      
  }

    public static async addUser(user: IUser) {
        await UserModelSchema.insertMany(user);
    }  

    public static async login(username: string, password: string) {
      let token;
      let user;

      try {
        if (username === '' || password === '') {
          return {
            loginMessage: 'Usernam and password are required, please enter corect data.'
          }
        }

        const userData = await UserModelSchema.find({username})

        if(userData.length === 0) {
          return {
            loginMessage: 'Incorect username, please enter corect data'
          };
        }

        const checkPassword = await bCrypt.compare(password, userData[0].password)

        if(!checkPassword) {
          return {
            loginMessage: 'Wrong password, please enter corect data'
          };
        }

        user = {
          username: userData[0].username,  
          role: userData[0].role        
        };

        token = await isAuthenticated({ _id: userData[0]._id })

      } catch (error) {
        if(error instanceof (Error)) {
          console.log(error.message)
        }
        throw error;
      }
      return {
        user,
        token, 
      }
    }
}

