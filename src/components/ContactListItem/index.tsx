import { FC } from 'react';
import { IContactListItem } from './types';
import styles from './ContactListItem.module.scss';

const ContactListItem:FC<IContactListItem> = ({contactName, openContactPage}) => (
    <div className={styles.wrapper} onClick = {openContactPage}>
        <p className={styles.firstLetter}>{contactName.charAt(0)}</p>
        <p className={styles.name}>{contactName}</p>
    </div>
);

export default ContactListItem;