import axios from "axios";
import {useState } from "react";
import { IContact } from "./types";
import Home from "./containers/Home";
import AddContact from "./containers/AddContact";
import ContactPage from "./containers/ContactPage";

import "./App.scss";

const App = () => {

  const [contactsList, setContactsList] = useState<IContact[] | []>([]);

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });
  
  const handleContactsChng = (searchInp: string) => {
    client.get(`?_limit=100`).then((response) => {
      setContactsList(
        response.data.filter((contact: IContact) =>
          contact.name.toLowerCase().includes(searchInp.toLowerCase())
        )
      );
    });
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
        handleContactsChange={handleContactsChng}
        contacts={contactsList}
      />
    ),
  };

  const [page, setPage] = useState(pages.home);

  return (
    <div className="wrapper">
      {contactsList.map((contact)=>contact.name)}
      <div className="contacts">{page}</div>
    </div>
  );
};

export default App;
