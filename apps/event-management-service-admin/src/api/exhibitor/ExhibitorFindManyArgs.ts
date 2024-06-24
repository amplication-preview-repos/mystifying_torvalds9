import { ExhibitorWhereInput } from "./ExhibitorWhereInput";
import { ExhibitorOrderByInput } from "./ExhibitorOrderByInput";

export type ExhibitorFindManyArgs = {
  where?: ExhibitorWhereInput;
  orderBy?: Array<ExhibitorOrderByInput>;
  skip?: number;
  take?: number;
};
