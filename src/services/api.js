import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(BASE_URL);

    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);

    throw error;
  }
};

export const createContact = async (contact) => {
  try {
    const response = await axios.post(BASE_URL, contact);

    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);

    throw error;
  }
};

export const updateContact = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedData);

    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);

    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting contact:', error);

    throw error;
  }
};
