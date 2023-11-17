import { useState } from 'react';
import {Input} from '../../components';

import styles from './AddContact.module.scss';

const AddContact = () =>  {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
      };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    };

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
    };


    return (
        <section className={styles.wrapper}>
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
        value={firstName}
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
        </section>
    )
};

export default AddContact;