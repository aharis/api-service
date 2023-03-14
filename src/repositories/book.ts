import { BookModelSchema } from '../models/book';
import { IBook } from '../utils/interfaces';

export class BookRepository {
  public static async addBook(book: IBook) {
    await BookModelSchema.insertMany(book);
  }

  public static async getBookById(id: string) {
    return BookModelSchema.findById(id);
  }
}
