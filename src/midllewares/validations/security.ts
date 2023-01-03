import * as jwt from 'jsonwebtoken';
import { IJWtPayload } from '../../utils/interfaces';

const secret = 'ecomerce';

export const isAuthenticated = (payload: IJWtPayload) => jwt.sign(payload, secret, {
    expiresIn: '2d'
})