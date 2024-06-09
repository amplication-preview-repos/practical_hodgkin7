import { CatGorie as TCatGorie } from "../api/catGorie/CatGorie";

export const CATGORIE_TITLE_FIELD = "id";

export const CatGorieTitle = (record: TCatGorie): string => {
  return record.id?.toString() || String(record.id);
};
