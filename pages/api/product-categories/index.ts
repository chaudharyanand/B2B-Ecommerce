import { NextApiRequest, NextApiResponse } from "next";
import { mapper } from "../../../mappers/product-category-mapper";
import { StrapiParams } from "../../../models/product-category";
import { forwardGetApi } from "../../../utils/fetch";

export default async function userHandler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  await forwardGetApi(
    `/api/product-categories?pagination[page]=$$page&${StrapiParams}`,
    res,
    true,
    mapper
  );
}
