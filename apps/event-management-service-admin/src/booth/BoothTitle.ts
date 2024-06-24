import { Booth as TBooth } from "../api/booth/Booth";

export const BOOTH_TITLE_FIELD = "name";

export const BoothTitle = (record: TBooth): string => {
  return record.name?.toString() || String(record.id);
};
