/* eslint-disable react/prop-types */

import ContactItem from './ContactItem.jsx';

function ContactList({ contacts, onEditContact, onDeleteContact }) {
  return (
    <div className="mt-8">
      <ul className=" flex flex-wrap   gap-10 ">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onEditContact={onEditContact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
