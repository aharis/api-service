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

export interface IBook {
    title: string;
    author: string;
    price: number;
    stock: number;
    reorder_notification: number;
  }

  export interface IBookMethods {
    addBook(book: IBook): Promise<IBook>;
  }