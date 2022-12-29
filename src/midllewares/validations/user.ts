import { NextFunction, Request, Response } from 'express';
import { statuses } from '../../config/statuses';
import { ResponseBuilder } from '../../utils/response';
import {IUser, UserModelSchema } from '../../models/user';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require('joi');
const usernameJoiObject = Joi.string()
.regex(/^[\u00C0-\u017Fa-zA-ZćĆčČžŽšŠđĐ][\u00C0-\u017Fa-zA-ZćĆčČžŽšŠđĐ -]+$/)
.min(3)
.max(30)
.trim()
.required()
.messages({'string.pattern.base': 'The username is of type string and can contain the character -'});

const emailJoiObject = Joi.string()
.email({ minDomainSegments: 2 })
.trim()
.required();

const passwordJoiObject = Joi.string()
.regex(/^[a-zA-Z0-9!ćĆčČžŽšŠđĐ@#$%^&*()_+\-=\[\]{};':"|,.<>\/?]*$/)
.min(6)
.max(30)
.required();

const addUserSchema = Joi.object({
    username: usernameJoiObject,
    email: emailJoiObject,
    password: passwordJoiObject,
}).unknown(true);

export class FormValidation {
    public static validateAddUserForm = async (
        req: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const { error } = addUserSchema.validate(req.body, { abortEarly: false })
        if (error) {
            return new ResponseBuilder<any>()
            .setStatus(false)
            .setData({ message: error.details})
            .setResponse(response)
            .setResponseStatus(statuses.forbidden)
            .build();
        }
        const { email } = req.body;
       
        const user: IUser = await UserModelSchema.getUserByEmail(email);

        if (user !== null) {
          return new ResponseBuilder<any>()
            .setStatus(false)
            .setData({ message: `User with email ${email} already exists!` })
            .setResponse(response)
            .setResponseStatus(statuses.forbidden)
            .build();
        }
    
        return next();
    }
}