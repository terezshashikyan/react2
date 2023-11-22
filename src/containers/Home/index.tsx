import { IHomePageProps } from "./types";
import { useNavigate } from "react-router";
import { FC, useEffect, useState } from "react";
import { Input, Button, Heading, ContactsList } from "../../components";

import styles from "./Home.module.scss";

const Home: FC<IHomePageProps> = ({ handleContactsChange, contacts }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => handleContactsChange(searchInput), [searchInput]);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/add");
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.firstSection}>
        <Heading children="Contacts" />
        <Button
          type="button"
          onClick={handleNavigation}
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
