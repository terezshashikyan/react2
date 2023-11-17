import { IContactListItem } from './types';
import styles from './ContactListItem.module.scss';

const ContactListItem = ({contactName}:IContactListItem) => (
    <div className={styles.wrapper}>
        <p className={styles.firstLetter}>{contactName.charAt(0)}</p>
        <p className={styles.name}>{contactName}</p>
    </div>
);

export default ContactListItem;