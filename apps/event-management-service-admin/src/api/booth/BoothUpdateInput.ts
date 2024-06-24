import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ExhibitorWhereUniqueInput } from "../exhibitor/ExhibitorWhereUniqueInput";
import { ExhibitorUpdateManyWithoutBoothsInput } from "./ExhibitorUpdateManyWithoutBoothsInput";

export type BoothUpdateInput = {
  description?: string | null;
  event?: EventWhereUniqueInput | null;
  exhibitor?: ExhibitorWhereUniqueInput | null;
  exhibitors?: ExhibitorUpdateManyWithoutBoothsInput;
  name?: string | null;
};
