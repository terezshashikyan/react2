import { useEffect, useState } from "react";

import axios from "axios";
import { IContact } from "./types";
import Home from "./containers/Home";
import AddContact from "./containers/AddContact";
import EditContact from "./containers/EditContact";
import ContactPage from "./containers/ContactPage";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.scss";

const App = () => {
  const navigate = useNavigate();
  const [contactsList, setContactsList] = useState<IContact[] | []>([]);
  const [contactsFilteredList, setContactsFilteredList] = useState<
    IContact[] | []
  >(contactsList);

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });

  useEffect(() => {
    client.get(``).then((response) => {
      setContactsList(
        response.data.map((contact: IContact) => {
          return {
            ...contact,
            phone: [{ id: Date.now(), value: contact.phone }],
            email: [{ id: Date.now(), value: contact.email }],
          };
        })
      );
    });
  }, []);

  const handleContactsChng = (searchInp: string) => {
    setContactsFilteredList(
      contactsList.filter((contact: IContact) =>
        contact.name.toLowerCase().includes(searchInp.toLowerCase())
      )
    );
  };

  const addContact = (
    name: string,
    lastName: string,
    company: string,
    phoneNumbers: { id: number; value: string }[] | [],
    emails: { id: number; value: string }[] | [],
    selectedImage: any
  ) => {
    client
      .post("", {
        email: emails,
        id: Date.now(),
        name: `${name} ${lastName}`,
        image: selectedImage,
        phone: phoneNumbers,
        company: {
          name: company,
        },
      })
      .then((response) => {
        navigate("/");
        setContactsList([response.data, ...contactsList]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteContact = (id: string) => {
    client.delete(`${id}`).catch((error) => {
      console.log(error);
    });
    setContactsList(
      contactsList.filter((contact: IContact) => {
        return contact.id !== id;
      })
    );
  };

  const editContact = (
    id: string,
    name: string,
    lastName: string,
    company: string,
    phoneNumbers: { id: number; value: string }[] | [],
    emails: { id: number; value: string }[] | [],
    selectedImage: any
  ) => {
    const editedContacts = contactsList.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          name: `${name} ${lastName}`,
          id: contact.id,
          email: emails,
          phone: phoneNumbers,
          image: selectedImage,
          company: {
            name: company,
          },
        };
      }
      return contact;
    });

    setContactsList(editedContacts);
  };

  return (
    <div className="wrapper">
      <div className="contacts">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                contacts={contactsFilteredList}
                handleContactsChange={handleContactsChng}
              />
            }
          />
          <Route
            path="/:id"
            element={<ContactPage contacts={contactsList} />}
          />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
          <Route
            path="/:id/edit"
            element={
              <EditContact
                editContact={editContact}
                deleteContact={deleteContact}
                contacts={contactsList}
              />
            }
          />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
