import { CreateActionCreator } from 'helpers';
import { STUDENTS } from 'configs/types';

export const fetchStudents = _ => CreateActionCreator.read({
    path: 'students',
    type: STUDENTS,
});