import { CreateActionCreator } from 'helpers';
import { COURSEINFO } from 'configs/types';

export const fetchCourseInfo = course => CreateActionCreator.read({
    path: `courses/${course}`,
    type: COURSEINFO,
});