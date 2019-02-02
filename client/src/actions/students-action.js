import { CreateActionCreator } from 'helpers';
import { STUDENTS } from 'configs/types';

export const fetchStudents = _ => CreateActionCreator.read({
    path: 'students',
    type: STUDENTS,
});

export const addStudents = (data) => CreateActionCreator.create({
    path: 'students',
    type: STUDENTS,
    body: data
});

export const updateStudents = (studentId, data) => CreateActionCreator.update({
    path: `students/${studentId}`,
    type: STUDENTS,
    body: data
});

export const deleteStudents = (studentId) => CreateActionCreator.delete({
    path: `students/${studentId}`,
    type: STUDENTS
});