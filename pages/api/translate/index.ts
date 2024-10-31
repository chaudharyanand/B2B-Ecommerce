import { NextApiRequest, NextApiResponse } from "next";
import { mapper } from "../../../mappers/translated-text-mapper";
import { forwardGetApi } from "../../../utils/fetch";

export default async function userHandler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  await forwardGetApi(
    "/api/translatable-strings?pagination[page]=$$page",
    res,
    true,
    mapper
  );
}
