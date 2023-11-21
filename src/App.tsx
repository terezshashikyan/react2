import axios from "axios";
import { useEffect, useState } from "react";
import { IContact } from "./types";
import Home from "./containers/Home";
import AddContact from "./containers/AddContact";
import ContactPage from "./containers/ContactPage";

import "./App.scss";

const App = () => {
  const [contacts, setContacts] = useState<IContact[] | []>([]);

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });

  const handleContactsChange = (searchInp: string) => {
    if (searchInp) {
      client.get(`?_limit=100`).then((response) => {
        setContacts(
          response.data.filter((contact: IContact) =>
            contact.name.toLowerCase().includes(searchInp.toLowerCase())
          )
        );
      });
    } else {
      client.get(`?_limit=100`).then((response) => {
        setContacts(response.data);
      });
    }
  };

  const openAddContactPage = () => setPage(pages.addContactPage);
  const openContactPage = () => setPage(pages.contactPage);
  const openHomePage = () => setPage(pages.home);

  const pages = {
    contactPage: <ContactPage />,
    addContactPage: (
      <AddContact
        openHomePage={openHomePage}
        addContact={() => console.log("hi")}
      />
    ),
    home: (
      <Home
        openAddContactPage={openAddContactPage}
        openContactPage={openContactPage}
        handleContactsChange={handleContactsChange}
        contacts={contacts}
      />
    ),
  };

  const [page, setPage] = useState(pages.home);

  return (
    <div className="wrapper">
      <div className="contacts">{page}</div>
    </div>
  );
};

export default App;
