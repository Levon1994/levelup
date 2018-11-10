import { CreateActionCreator } from 'helpers';
import { TEAMMEMBERS } from 'configs/types';

export const fetchTeamMembers = _ => CreateActionCreator.read({
    path: 'team-members',
    type: TEAMMEMBERS,
});