import { FC, useState } from "react";
import { icon } from "../../assets/images";
import { IAddContactProps, PhoneNumberInput } from "./types";
import { Input, Button, Heading, ProfileImage } from "../../components";

import styles from "./AddContact.module.scss";

const AddContact: FC<IAddContactProps> = ({ openHomePage, addContact }) => {
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumberInput[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const addPhoneNumberInput = () => {
    const newPhoneNumbers = [...phoneNumbers, { id: Date.now(), value: "" }];
    setPhoneNumbers(newPhoneNumbers);
  };

  const handlePhoneNumberChange = (id: number, value: string) => {
    const updatedPhoneNumbers = phoneNumbers.map((phoneNumber) =>
      phoneNumber.id === id ? { ...phoneNumber, value } : phoneNumber
    );
    setPhoneNumbers(updatedPhoneNumbers);
  };

  return (
    <section className={styles.wrapper}>
      <Heading children="New Contact" />

      <div className={styles.wrapper__firstSection}>
        <Button
          type="button"
          onClick={openHomePage}
          children="Cancel"
          className={styles.button}
          disabled={false}
        />

        <Button
          type="button"
          onClick={() => addContact(firstName, lastName, company, phoneNumbers)}
          children="Done"
          className={styles.button}
          disabled={false}
        />
      </div>

      <div className={styles.wrapper__secondSection}>
        <ProfileImage img={icon} />

        <Button
          type="button"
          onClick={() => console.log("hi")}
          children="Add Photo"
          className={styles.button}
          disabled={false}
        />
      </div>

      <div className={styles.wrapper__thirdSection}>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          label="first name"
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          label="last name"
        />

        <Input
          type="text"
          placeholder="Company"
          value={company}
          onChange={handleCompanyChange}
          label="company"
        />
      </div>

      <div className={styles.wrapper__forthSection}>
        {phoneNumbers.map((phoneNumber) => (
          <Input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber.value}
            onChange={(e) =>
              handlePhoneNumberChange(phoneNumber.id, e.target.value)
            }
            label="company"
          />
        ))}
        <Button
          type="button"
          onClick={addPhoneNumberInput}
          children="+ Add Phone Number"
          className={styles.button}
          disabled={false}
        />

        <Button
          type="button"
          onClick={() => console.log("hi")}
          children="+ Add Email Address"
          className={styles.button}
          disabled={false}
        />
      </div>
    </section>
  );
};

export default AddContact;
