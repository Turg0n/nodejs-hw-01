import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
      const contacts = await getAllContacts();
      for (let i = contacts.length; i !== 0; i--) {
        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  await removeAllContacts();
