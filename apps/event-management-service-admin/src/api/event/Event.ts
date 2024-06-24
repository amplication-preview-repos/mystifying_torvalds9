import { Booth } from "../booth/Booth";
import { Sponsor } from "../sponsor/Sponsor";

export type Event = {
  booths?: Array<Booth>;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  sponsors?: Array<Sponsor>;
  title: string | null;
  updatedAt: Date;
};
