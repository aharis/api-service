import { UserModelSchema } from "../models/user";
import { IUser } from '../utils/interfaces';

export class UserRepository {
    public static async addUser(user: IUser) {
        await UserModelSchema.insertMany(user);
      }
}