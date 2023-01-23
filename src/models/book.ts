import { model, Model, Schema } from 'mongoose';
import { BookRepository } from '../repositories/book';
import { IBook, IBookMethods } from '../utils/interfaces';

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    trim: true,
  },
  reorder_notification: {
    type: Number,
    trim: true,
  },
});

BookSchema.static('addBook', BookRepository.addBook);
type BookModelSchemaType = Model<IBook> & IBookMethods;
export const BookModelSchema: BookModelSchemaType = model<IBook, IBookMethods>(
  'book',
  BookSchema,
  'book'
) as BookModelSchemaType;
