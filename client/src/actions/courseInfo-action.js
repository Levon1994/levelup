import { CreateActionCreator } from 'helpers';
import { COURSEINFO } from 'configs/types';

export const fetchCourseInfo = course => CreateActionCreator.read({
    path: `courses/${course}`,
    type: COURSEINFO,
});

export const addCourse = (data) => CreateActionCreator.create({
    path: 'courses',
    type: COURSEINFO,
    body: data
});

export const updateCourse = (course, data) => CreateActionCreator.update({
    path: `courses/${course}`,
    type: COURSEINFO,
    body: data
});

export const deleteCourse = course => CreateActionCreator.delete({
    path: `courses/${course}`,
    type: COURSEINFO
});