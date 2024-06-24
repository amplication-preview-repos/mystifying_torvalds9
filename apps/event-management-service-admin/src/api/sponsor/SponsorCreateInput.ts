import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SponsorCreateInput = {
  company?: string | null;
  email?: string | null;
  event?: EventWhereUniqueInput | null;
  name?: string | null;
  phone?: string | null;
};
