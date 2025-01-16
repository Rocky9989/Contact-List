/* eslint-disable react/prop-types */

function ContactItem({ contact, onEditContact, onDeleteContact }) {
  return (
    <li className="bg-slate-200 p-5 rounded flex-1 text-center">
      <p className="font-medium">{contact.name}</p>

      <p>{contact.email}</p>

      <button
        onClick={() => onEditContact(contact)}
        className=" text-white bg-indigo-500 rounded px-2 mt-4 hover:bg-indigo-600 italic"
      >
        Edit
      </button>

      <button
        onClick={() => onDeleteContact(contact.id)}
        className="text-white bg-red-500 rounded px-2 mt-4 ml-2 hover:bg-red-600 italic"
      >
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
