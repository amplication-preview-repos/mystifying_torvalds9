import { BoothWhereUniqueInput } from "../booth/BoothWhereUniqueInput";
import { BoothListRelationFilter } from "../booth/BoothListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExhibitorWhereInput = {
  booth?: BoothWhereUniqueInput;
  booths?: BoothListRelationFilter;
  company?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
