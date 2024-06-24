import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ExhibitorWhereUniqueInput } from "../exhibitor/ExhibitorWhereUniqueInput";
import { ExhibitorListRelationFilter } from "../exhibitor/ExhibitorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BoothWhereInput = {
  description?: StringNullableFilter;
  event?: EventWhereUniqueInput;
  exhibitor?: ExhibitorWhereUniqueInput;
  exhibitors?: ExhibitorListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
