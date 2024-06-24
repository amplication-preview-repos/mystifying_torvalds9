import { SortOrder } from "../../util/SortOrder";

export type SponsorOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
