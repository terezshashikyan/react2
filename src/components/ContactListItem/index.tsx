import { FC } from 'react';
import { IContactListItem } from './types';
import styles from './ContactListItem.module.scss';

const ContactListItem:FC<IContactListItem> = ({contactName}) => (
    <div className={styles.wrapper} onClick = {()=> console.log('hi')}>
        <p className={styles.firstLetter}>{contactName.charAt(0)}</p>
        <p className={styles.name}>{contactName}</p>
    </div>
);

export default ContactListItem;