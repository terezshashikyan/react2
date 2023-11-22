import { IContact } from "../../types";

export interface IHomePageProps {
  contacts: IContact[] | [];
  handleContactsChange: (input: string) => void;
}
