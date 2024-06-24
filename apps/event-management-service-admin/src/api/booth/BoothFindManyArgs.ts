import { BoothWhereInput } from "./BoothWhereInput";
import { BoothOrderByInput } from "./BoothOrderByInput";

export type BoothFindManyArgs = {
  where?: BoothWhereInput;
  orderBy?: Array<BoothOrderByInput>;
  skip?: number;
  take?: number;
};
