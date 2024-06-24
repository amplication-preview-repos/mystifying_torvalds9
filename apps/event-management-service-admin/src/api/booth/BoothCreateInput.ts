import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ExhibitorWhereUniqueInput } from "../exhibitor/ExhibitorWhereUniqueInput";
import { ExhibitorCreateNestedManyWithoutBoothsInput } from "./ExhibitorCreateNestedManyWithoutBoothsInput";

export type BoothCreateInput = {
  description?: string | null;
  event?: EventWhereUniqueInput | null;
  exhibitor?: ExhibitorWhereUniqueInput | null;
  exhibitors?: ExhibitorCreateNestedManyWithoutBoothsInput;
  name?: string | null;
};
