import { BoothListRelationFilter } from "../booth/BoothListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SponsorListRelationFilter } from "../sponsor/SponsorListRelationFilter";

export type EventWhereInput = {
  booths?: BoothListRelationFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  sponsors?: SponsorListRelationFilter;
  title?: StringNullableFilter;
};
