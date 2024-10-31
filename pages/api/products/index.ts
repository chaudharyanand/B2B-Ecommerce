import { NextApiRequest, NextApiResponse } from "next";
import { mapper } from "../../../mappers/product-mapper";
import { StrapiParams } from "../../../models/product";
import { forwardGetApi } from "../../../utils/fetch";

export default async function userHandler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  await forwardGetApi(
    `/api/products?pagination[page]=$$page&${StrapiParams}`,
    res,
    true,
    mapper
  );
}
