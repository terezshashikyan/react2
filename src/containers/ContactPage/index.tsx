import { IContact } from "../../types";
import { icon } from "../../assets/images";
import { IContactPageProps } from "./types";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CallRounded, MailOutlineRounded } from "@mui/icons-material";
import { Button, ProfileImage, Heading, Paragraph } from "../../components";

import styles from "./ContactPage.module.scss";

const ContactPage: FC<IContactPageProps> = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState<IContact | null>(null);

  useEffect(
    () => {
      setContact(
        contacts.filter((contact: IContact) => contact.id.toString() === id)[0]
      );
    },
    []
  );

 const onMailClick = () => {
  if(contact?.email) {
    window.location.href = `mailto:${contact.email}`
  }
};

const onTelephoneClick = () => {
  if(contact?.phone) {
    window.open(`tel:${contact.phone[0]}`)
  }
};


  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__sectionFirst}>
        <Button
          type="button"
          onClick={() => navigate("/")}
          children="&#10094; Contacts"
          className={styles.button}
          disabled={false}
        />
        <Button
          type="button"
          onClick={() => navigate("./edit")}
          children="Edit"
          className={styles.button}
          disabled={false}
        />
      </div>

      <div className={styles.wrapper__sectionSecond}>
        <ProfileImage img = {contact?.image || icon} />
        <Heading children={contact?.name || ""} />
        <section className={styles.wrapper__sectionSecond__buttons}>
          <div className={styles.wrapper__sectionSecond__buttons__button}>
            <CallRounded color="primary" fontSize="large" onClick = {()=> onTelephoneClick()}/>
          </div>
          <div className={styles.wrapper__sectionSecond__buttons__button} onClick = {() => onMailClick()}>
            <MailOutlineRounded color="primary" fontSize="large" />
          </div>
        </section>
      </div>

      <div className={styles.wrapper__sectionThird}>
        {contact?.company?.name ? (
          <div className={styles.wrapper__sectionThird__item}>
            <Paragraph children= "Company" />
            <Button
              type="button"
              onClick={() => console.log("hi")}
              children={contact?.company?.name}
              className={styles.button}
              disabled={false}
            />
          </div>
        ) : null}

        {contact?.phone?.length ? (
          <div className={styles.wrapper__sectionThird__item}>
            {<Paragraph children="Phone Number" />}
            <Button
              type="button"
              onClick={()=> onTelephoneClick()}
              children={contact.phone[0]}
              className={styles.button}
              disabled={false}
            />
          </div>
        ) : null}

        {contact?.email?.length ? (
          <div className={styles.wrapper__sectionThird__item}>
            <Paragraph children="Email" />
            <Button
              type="button"
              onClick={() => onMailClick()}
              children={contact.email[0]}
              className={styles.button}
              disabled={false}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ContactPage;
