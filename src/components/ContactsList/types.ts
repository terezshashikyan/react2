import { IContact } from "../../types";

export interface IContactsProp {
  contacts: IContact[];
  openContactPage: () => void;
}
