import { FC } from 'react';
import { useNavigate } from 'react-router';
import { IContactListItem } from './types';

import styles from './ContactListItem.module.scss';

const ContactListItem:FC<IContactListItem> = ({contact}) => {
    const navigate = useNavigate();
   return  (
    <div className={styles.wrapper} onClick={() => {navigate(`/${contact.id}`); localStorage.setItem('contact id', contact.id.toString())}}>
        <p className={styles.firstLetter}>{contact.name.charAt(0)}</p>
        <p className={styles.name}>{contact.name}</p>
    </div>
)
};

export default ContactListItem;