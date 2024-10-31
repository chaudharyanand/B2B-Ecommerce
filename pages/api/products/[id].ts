import { mapperSingle } from "../../../mappers/product-mapper";
import { StrapiParams } from "../../../models/product";
import { forwardGetApi } from "../../../utils/fetch";

export default async function handler(req: any, res: any) {
  const { id } = req.query;

  await forwardGetApi(
    `/api/products/${id}?${StrapiParams}`,
    res,
    true,
    mapperSingle
  );
}
