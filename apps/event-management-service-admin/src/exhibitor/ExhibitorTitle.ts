import { Exhibitor as TExhibitor } from "../api/exhibitor/Exhibitor";

export const EXHIBITOR_TITLE_FIELD = "name";

export const ExhibitorTitle = (record: TExhibitor): string => {
  return record.name?.toString() || String(record.id);
};
