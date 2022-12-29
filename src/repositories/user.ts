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
}

