import { CreateActionCreator } from 'helpers';
import { USERAUTH } from 'configs/types';

export const authorizeUser = user => CreateActionCreator.create({
    path: 'user/login',
    type: USERAUTH,
    body: user
});

export const getUserAuth = () => CreateActionCreator.create({
  path: 'user/auth',
  type: "USER_AUTH",
})
