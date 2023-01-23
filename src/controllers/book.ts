import { Request, Response } from 'express';
import { statuses } from '../config/statuses';
import { BookModelSchema } from '../models/book';
import { errorResponse, ResponseBuilder } from '../utils/response';

export class BookController {
  public static async addBook(req: Request, response: Response) {
    try {
      await BookModelSchema.addBook(req.body);
      return new ResponseBuilder<any>()
        .setStatus(true)
        .setData({ message: 'Book succesfully added!' })
        .setResponse(response)
        .setResponseStatus(statuses.created)
        .build();
    } catch (error) {
      return errorResponse(response, statuses.server_error, [error as Error]);
    }
  }
}
