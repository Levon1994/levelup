import { CreateActionCreator } from 'helpers';
import { COURSEINFO } from 'configs/types';

export const fetchCourseInfo = _ => CreateActionCreator.read({
    path: 'course-info',
    type: COURSEINFO,
});