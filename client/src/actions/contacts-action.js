import { CreateActionCreator } from 'helpers';
import { CONTACTS } from 'configs/types';

export const fetchContacts = _ => CreateActionCreator.read({
    path: 'contacts',
    type: CONTACTS,
});