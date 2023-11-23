import { IContactsProp } from "./types";
import { IContact } from "../../types";
import ContactListItem from "../ContactListItem";

import styles from "./ContactsList.module.scss";

const ContactsList: React.FC<IContactsProp> = ({ contacts}) => {
  
  const sortContacts = (contacts: IContact[]) => {

   return (
    contacts.slice().sort((a, b) => {

    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0; 
  })
);
};

  const contactsRenderer = sortContacts(contacts)
    .map((contact, i, arr) => {
      if (!arr[i - 1]) {
        return (
          <>
            <p className= {styles.alphGroupName}>
              {contact.name.charAt(0)}
            </p>
            <ContactListItem contact={contact}/>
          </>
        );
      } else if (arr[i - 1].name.charAt(0) !== contact.name.charAt(0)) {
        return (
          <>
            <p className={styles.alphGroupName}>{contact.name.charAt(0)}</p>
            <ContactListItem contact={contact}/>
          </>
        );
      } else {
        return <ContactListItem contact={contact}/>;
      }
    });

  return <section className= {styles.wrapper}>{contactsRenderer}</section>;
};

export default ContactsList;
