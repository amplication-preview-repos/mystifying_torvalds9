import { BoothWhereUniqueInput } from "../booth/BoothWhereUniqueInput";
import { BoothCreateNestedManyWithoutExhibitorsInput } from "./BoothCreateNestedManyWithoutExhibitorsInput";

export type ExhibitorCreateInput = {
  booth?: BoothWhereUniqueInput | null;
  booths?: BoothCreateNestedManyWithoutExhibitorsInput;
  company?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
