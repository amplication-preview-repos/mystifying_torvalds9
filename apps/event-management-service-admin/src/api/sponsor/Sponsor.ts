import { Event } from "../event/Event";

export type Sponsor = {
  company: string | null;
  createdAt: Date;
  email: string | null;
  event?: Event | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
