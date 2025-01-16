/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function ContactForm({ onAddContact, editingContact, onUpdateContact }) {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editingContact) {
      setFormData({ name: editingContact.name, email: editingContact.email });
    } else {
      setFormData({ name: '', email: '' });
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      onUpdateContact(editingContact.id, formData);
    } else {
      onAddContact(formData);
    }
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="mb-8 bg-slate-200 p-10 rounded">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-end gap-10"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Name:
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            className="p-3 focus:outline-slate-400  text-base text-violet-900  rounded w-[250px] placeholder:italic placeholder:text-slate-400 "
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="email" className="font-medium">
            Email:
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            className="p-3 focus:outline-slate-400  text-base text-violet-900  rounded w-[250px] placeholder:italic placeholder:text-slate-400 "
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-950 text-white p-3 rounded italic font-medium hover:bg-indigo-900"
        >
          {editingContact ? 'Update' : 'Add'} Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
