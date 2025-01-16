import { useState, useEffect } from 'react';

import ContactList from './components/ContactList.jsx';

import ContactForm from './components/ContactForm.jsx';

import {
  fetchContacts,
  createContact,
  updateContact,
  deleteContact,
} from './services/api.js';

function App() {
  const [contacts, setContacts] = useState([]);

  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContacts();
      setContacts(data);
    };
    fetchData();
  }, []);

  const handleAddContact = async (contact) => {
    const newContact = await createContact(contact);
    setContacts([...contacts, newContact]);
  };

  const handleUpdateContact = async (id, updatedData) => {
    const updatedContact = await updateContact(id, updatedData);
    setContacts(contacts.map((c) => (c.id === id ? updatedContact : c)));
    setEditingContact(null);
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="p-8 italic text-indigo-950 container">
      <h1 className="text-center text-3xl font-bold text-indigo-950 mb-8">
        Contact List
      </h1>
      <ContactForm
        onAddContact={handleAddContact}
        editingContact={editingContact}
        onUpdateContact={handleUpdateContact}
      />
      <ContactList
        contacts={contacts}
        onEditContact={setEditingContact}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
