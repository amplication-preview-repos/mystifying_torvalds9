import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SponsorWhereInput = {
  company?: StringNullableFilter;
  email?: StringNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
