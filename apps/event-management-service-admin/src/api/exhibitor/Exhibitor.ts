import { Booth } from "../booth/Booth";

export type Exhibitor = {
  booth?: Booth | null;
  booths?: Array<Booth>;
  company: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
