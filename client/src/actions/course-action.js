import { CreateActionCreator } from 'helpers';
import { COURSES } from 'configs/types';

export const fetchCourses = _ => CreateActionCreator.read({
    path: `courses`,
    type: COURSES,
});

export const addCourses = (data) => CreateActionCreator.create({
    path: `courses`,
    type: COURSES,
    body: data
});

export const updateCourses = (course, data) => CreateActionCreator.update({
    path: `courses/${course}`,
    type: COURSES,
    body: data
});

export const deleteCourses = course => CreateActionCreator.delete({
    path: `courses/${course}`,
    type: COURSES
});