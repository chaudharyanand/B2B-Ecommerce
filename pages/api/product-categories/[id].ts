import { NextApiRequest, NextApiResponse } from "next";
import { mapperSingle } from "../../../mappers/product-category-mapper";
import { StrapiParams } from "../../../models/product-category";
import { forwardGetApi } from "../../../utils/fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  await forwardGetApi(
    `/api/product-categories/${id}?${StrapiParams}`,
    res,
    true,
    mapperSingle
  );
}
