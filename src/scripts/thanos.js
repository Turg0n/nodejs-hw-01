import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const allContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const survivorsContacts = allContacts.filter(contact => {
      const variation = Math.random();
      return variation > 0.5; 
    });
    await fs.writeFile(PATH_DB, JSON.stringify(survivorsContacts));
  } catch (error) {
    console.log(error);
  }
};

await thanos();