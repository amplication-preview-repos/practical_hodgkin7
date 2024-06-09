import { CatGorieWhereInput } from "./CatGorieWhereInput";
import { CatGorieOrderByInput } from "./CatGorieOrderByInput";

export type CatGorieFindManyArgs = {
  where?: CatGorieWhereInput;
  orderBy?: Array<CatGorieOrderByInput>;
  skip?: number;
  take?: number;
};
