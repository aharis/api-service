import { UserModelSchema } from "../models/user";
import { IUser } from '../utils/interfaces';

export class UserRepository {
    public static async addUser(user: IUser) {
      console.log(user)
        await UserModelSchema.insertMany(user);
      }
}