import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
      const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
      for (let i = 0; i < number; i += 1) {
          const fakeContact = createFakeContact();
          contacts.push(fakeContact);
      }
      await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (error) {
      console.log(error);
  }
};

await generateContacts(5);
