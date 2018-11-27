import { createReducer } from 'helpers';
import {
    USERAUTH,
} from 'configs/types';

export const user = createReducer(USERAUTH);
