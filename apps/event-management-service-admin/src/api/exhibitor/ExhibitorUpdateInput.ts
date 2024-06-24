import { BoothWhereUniqueInput } from "../booth/BoothWhereUniqueInput";
import { BoothUpdateManyWithoutExhibitorsInput } from "./BoothUpdateManyWithoutExhibitorsInput";

export type ExhibitorUpdateInput = {
  booth?: BoothWhereUniqueInput | null;
  booths?: BoothUpdateManyWithoutExhibitorsInput;
  company?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
