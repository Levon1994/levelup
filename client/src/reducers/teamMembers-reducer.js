import { createReducer } from 'helpers';
import {
    TEAMMEMBERS,
} from 'configs/types';

export const teamMembers = createReducer(TEAMMEMBERS);