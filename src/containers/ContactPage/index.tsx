import { Button, ProfileImage, Heading, Paragraph } from "../../components";
import { CallRounded, MailOutlineRounded } from "@mui/icons-material";

import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__sectionFirst}>
        <Button
          type="button"
          onClick={() => console.log("hi")}
          children="&#10094; Contacts"
          className={styles.button}
          disabled={false}
        />
        <Button
          type="button"
          onClick={() => console.log("hi")}
          children="Edit"
          className={styles.button}
          disabled={false}
        />
      </div>

      <div className={styles.wrapper__sectionSecond}>
        {/* <ProfileImage /> */}
        <Heading children="Aaron Smith" />
        <section className={styles.wrapper__sectionSecond__buttons}>
          <div className={styles.wrapper__sectionSecond__buttons__button}>
            <CallRounded color="primary" fontSize="large" />
          </div>
          <div className={styles.wrapper__sectionSecond__buttons__button}>
            <MailOutlineRounded color="primary" fontSize="large" />
          </div>
        </section>
      </div>

      <div className={styles.wrapper__sectionThird}>
        <div className={styles.wrapper__sectionThird__item}>
          <Paragraph children="Company" />
          <Button
            type="button"
            onClick={() => console.log("hi")}
            children="Edit"
            className={styles.button}
            disabled={false}
          />
        </div>

        <div className={styles.wrapper__sectionThird__item}>
          <Paragraph children="Phone Number" />
          <Button
            type="button"
            onClick={() => console.log("hi")}
            children="Edit"
            className={styles.button}
            disabled={false}
          />
        </div>

        <div className={styles.wrapper__sectionThird__item}>
          <Paragraph children="Email" />
          <Button
            type="button"
            onClick={() => console.log("hi")}
            children="Edit"
            className={styles.button}
            disabled={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
