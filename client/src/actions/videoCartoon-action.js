import { CreateActionCreator } from 'helpers';
import { VIDEOCARTOONS } from 'configs/types';

export const fetchVideoCartoons = _ => CreateActionCreator.read({
    path: 'video-cartoon',
    type: VIDEOCARTOONS,
});