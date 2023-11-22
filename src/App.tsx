import axios from "axios";
import {useState } from "react";
import { IContact } from "./types";
import Home from "./containers/Home";
import AddContact from "./containers/AddContact";
import ContactPage from "./containers/ContactPage";
import {Routes, Route,useNavigate} from 'react-router-dom';

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

const navigate = useNavigate();

const addContact = (name: string, lastName: string, company: string, phoneNumbers: {}[], emails: {}[], selectedImage: any ) => {
  client
  .post("", {
    email: emails,
    id: Date.now(),
    name: name+lastName,
    image: selectedImage,
    phoneNumbers: phoneNumbers,
    "company": {
      name: company,
    }
  }) .then((response) => {
    setContactsList([response.data, ...contactsList]);
    console.log(response.data);
    navigate('/')
  })
  .catch((error) => {
    console.log(error);
  });
};


  return (
    <div className="wrapper">

      <div className="contacts">
    <Routes>
      <Route path = "/" element = {<Home contacts = {contactsList} handleContactsChange={handleContactsChng}/>} /> 
      <Route path="contacts/:id" element={<ContactPage />} />
      <Route path = "/add" element = {<AddContact addContact={addContact}/>} /> 
      <Route path = "*" element = {<p>Not Found</p>} /> 
    </Routes>
    </div>
    </div>
  );
};

export default App;
