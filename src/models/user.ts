import { Document, Model, Schema, model } from "mongoose";
import { UserRepository } from '../repositories/user';

export interface IUser extends Document {
    username: string,
    email: string,
    address: string,
    password: string,
    state: string,
    city: string,
    zipCode: string,
    checkbox: boolean,
}

export interface IUserMethods {
    addUser(user: IUser): Promise<IUser>;
}

    const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    address: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        trim: true

    },
    checkbox: { //I would like to be a member to receive additional discounts 
        type: Boolean,
        trim: true,
        default: false
    },

});

UserSchema.static('addUser', UserRepository.addUser);

type UserModelSchemaType = Model<IUser> & IUserMethods;
export const UserModelSchema: UserModelSchemaType = model<IUser, IUserMethods>('user', UserSchema, 'user') as UserModelSchemaType;