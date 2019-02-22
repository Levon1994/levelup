import { CreateActionCreator } from 'helpers';
import { USERAUTH } from 'configs/types';

export const authorizeUser = user => CreateActionCreator.create({
    path: 'user/login',
    type: USERAUTH,
    body: user
});



export const getUser = token => CreateActionCreator.create({
    path: 'user/getuser',
    type: USERAUTH,
    body: token
});
