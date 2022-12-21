import { Request, Response } from 'express';
import { statuses } from '../config/statuses';
import { UserModelSchema } from '../models/user';
import { errorResponse, ResponseBuilder } from '../utils/response';
console.log(UserModelSchema)
export class UserController {
    public static async addUser(
        req: Request,
        response: Response,
      ) {
        try {  
          console.log(req.body)
          await UserModelSchema.addUser(req.body);
          return new ResponseBuilder<any>()
            .setStatus(true)
            .setData({ message: 'User succesfully added!' })
            .setResponse(response)
            .setResponseStatus(statuses.created)
            .build();
        } catch (error) {
          return errorResponse(response, statuses.server_error, [error as Error]);
        }
      }
}