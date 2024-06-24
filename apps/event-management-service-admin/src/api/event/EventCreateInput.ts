import { BoothCreateNestedManyWithoutEventsInput } from "./BoothCreateNestedManyWithoutEventsInput";
import { SponsorCreateNestedManyWithoutEventsInput } from "./SponsorCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  booths?: BoothCreateNestedManyWithoutEventsInput;
  date?: Date | null;
  description?: string | null;
  sponsors?: SponsorCreateNestedManyWithoutEventsInput;
  title?: string | null;
};
