import { CreateActionCreator } from 'helpers';
import { APPLYFORM } from 'configs/types';

export const fetchApplyers = _ => CreateActionCreator.read({
    path: 'apply-form',
    type: APPLYFORM,
});

export const addApplyer = (data) => CreateActionCreator.create({
    path: 'apply-form',
    type: APPLYFORM,
    body: data
});

export const deleteApplyer = (applyerId) => CreateActionCreator.delete({
    path: `apply-form/${applyerId}`,
    type: APPLYFORM
});