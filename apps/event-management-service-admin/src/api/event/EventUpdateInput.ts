import { BoothUpdateManyWithoutEventsInput } from "./BoothUpdateManyWithoutEventsInput";
import { SponsorUpdateManyWithoutEventsInput } from "./SponsorUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  booths?: BoothUpdateManyWithoutEventsInput;
  date?: Date | null;
  description?: string | null;
  sponsors?: SponsorUpdateManyWithoutEventsInput;
  title?: string | null;
};
