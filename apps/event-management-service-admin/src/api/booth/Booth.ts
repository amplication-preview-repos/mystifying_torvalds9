import { Event } from "../event/Event";
import { Exhibitor } from "../exhibitor/Exhibitor";

export type Booth = {
  createdAt: Date;
  description: string | null;
  event?: Event | null;
  exhibitor?: Exhibitor | null;
  exhibitors?: Array<Exhibitor>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
