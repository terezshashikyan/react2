import { IContactsProp } from "./types";

import ContactListItem from "../ContactListItem";

import styles from "./ContactsList.module.scss";

const ContactsList: React.FC<IContactsProp> = ({ contacts, openContactPage }) => {
  const contactsRenderer = contacts
    .map((contact) => contact.name)
    .sort()
    .map((contact, i, arr) => {
      if (!arr[i - 1]) {
        return (
          <>
            <p className= {styles.alphGroupName}>
              {contact.charAt(0)}
            </p>
            <ContactListItem contactName={contact} openContactPage={openContactPage}/>
          </>
        );
      } else if (arr[i - 1].charAt(0) !== contact.charAt(0)) {
        return (
          <>
            <p className={styles.alphGroupName}>{contact.charAt(0)}</p>
            <ContactListItem contactName={contact} openContactPage={openContactPage}/>
          </>
        );
      } else {
        return <ContactListItem contactName={contact} openContactPage={openContactPage}/>;
      }
    });

  return <section className= {styles.wrapper}>{contactsRenderer}</section>;
};

export default ContactsList;
