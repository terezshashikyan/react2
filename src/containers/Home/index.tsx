import axios from "axios";
import { IContact } from "../../types";
import { useEffect, useState } from "react";
import ContactsList from "../../components/ContactsList";
import { Input, Button, Heading } from "../../components";

import styles from "./Home.module.scss";

const Home = () => {

  const [searchInput, setSearchInput] = useState("");

  const [contacts, setContacts] = useState<IContact[] | []>([]);

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleContactsChange = () => {
    if(searchInput) {
        client.get(`?_limit=100`).then((response) => {
        setContacts(response.data.filter((contact: IContact) => contact.name.toLowerCase().includes(searchInput.toLowerCase())));
        });
    }else {
      client.get(`?_limit=10`).then((response) => {
        setContacts(response.data);
      });
    }
  };

  useEffect(handleContactsChange, [searchInput]);

  const addContact = () => {
    client
      .post("", {
        id: 1000,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      })
      .then((response) => {
        setContacts([response.data, ...contacts]);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.firstSection}>
        <Heading children = 'Contacts'/>
        <Button
          type="button"
          onClick={addContact}
          children="+"
          className={styles.button}
          disabled={false}
        />
      </div>
      <Input
        type="search"
        placeholder="Search ..."
        value={searchInput}
        onChange={handleSearchInputChange}
        label="search"
      />
      <ContactsList contacts={contacts} />
    </section>
  );
};

export default Home;
