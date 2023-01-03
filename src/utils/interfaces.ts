import { Types } from "mongoose"
export interface IJWtPayload {
    _id: Types.ObjectId
}
export interface IUser {
    username: string,
    email: string,
    password: string,
    address: string,
    state: string,
    city: string,
    zipCode: string,
    checkbox: boolean
}