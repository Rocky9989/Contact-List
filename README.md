# **Contact List App**

A simple React application for managing a contact list with CRUD (Create, Read, Update, Delete) operations. This app uses the **JSONPlaceholder API** as a mock backend for demonstrating functionality.

---

## **Deployed Application**

Check out the live version of the app here: [Contact List App](https://rocky9989.github.io/Contact-List/)

---

## **Features**

- Fetch and display contacts from an API.
- Add new contacts.
- Edit existing contacts.
- Delete contacts.
- Responsive and user-friendly interface.

---

## **Technologies Used**

- React
- Axios (for API calls)
- Tailwind CSS (for styling)
- JSONPlaceholder (mock API)

---

## **Folder Structure**

```plaintext
src/
├── components/
│   ├── ContactForm.jsx       # Form component for adding and editing contacts
│   ├── ContactItem.jsx       # Single contact item
│   └── ContactList.jsx       # List of all contacts
├── services/
│   └── api.js                # API integration logic
├── App.jsx                   # Main application component
├── index.css                 # Global CSS (Tailwind setup)
└── main.jsx                  # Entry point
