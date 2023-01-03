import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import { statuses } from '../config/statuses';
import { UserModelSchema } from '../models/user';
import { errorResponse, ResponseBuilder } from '../utils/response';
import { UserRepository } from '../repositories/user';
export class UserController {
    public static async addUser(
        req: Request,
        response: Response,
      ) {
        try {  
          const { password } = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          req.body.password = hashedPassword;

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

    public static login = async (req: Request, response: Response) => {
      try {
        const { username, password } = req.body;
        const token = await UserRepository.login(username, password)
        return new ResponseBuilder<any>()
        .setStatus(true)

        .setData(token)
        .setResponse(response)
        .setResponseStatus(statuses.success)
        .build()
      } catch (error) {
        return errorResponse(response, statuses.server_error, [error as Error])
      }
    }  
      
}