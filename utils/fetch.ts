import { NextApiRequest, NextApiResponse } from "next";

export const fetcher = (...args: any) => fetch(args).then((res) => res.json());

export const fetchData = async (url: string, useToken: boolean = false) => {
  const json = await fetchJsonResponse(url, useToken);
  if (!json.data) {
    console.log(`fetching ${url} caused error: ${json.error}; json: `, json);
  }

  return json.data;
};

const fetchJsonResponse = async (url: string, useToken: boolean = false) => {
  let headers: HeadersInit = useToken
    ? {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }
    : {};

  const res = await fetch(process.env.STRAPI_API_BASE_URL + url, { headers });
  return await res.json();
};

export const fetchPagedData = async (url: string, useToken: boolean) => {
  let data = await fetchJsonResponse(url.replace("$$page", "1"), useToken);
  if (!data.meta || !data.meta.pagination) return data.data;

  let allData: any[] = [];
  let page = data.meta.pagination.page;
  let totalPages = data.meta.pagination.pageCount;

  allData = [...data.data];
  while (page < totalPages) {
    data = await fetchJsonResponse(
      url.replace("$$page", `${page + 1}`),
      useToken
    );
    allData.push(...data.data);
    page = data.meta.pagination.page;
  }

  return allData;
};

const sendData = async (method: string, url: string, payload: any) => {
  const res = await fetch(process.env.NEXT_LOCAL_BASE_URL + url, {
    method: method,
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
};

export const forwardGetApi = async (
  forwardUrl: string,
  res: NextApiResponse,
  useToken: boolean,
  mapper: any,
  callback: any = null
) => {
  const getResponse = await fetchPagedData(forwardUrl, useToken);

  if (!getResponse) {
    console.log(`Fetching ${forwardUrl} resulted in Not Found (404)`);
    invokeResponseOrCallback(res, callback, 404, getResponse);
    return;
  }

  const mappedResponse = mapper != null ? mapper(getResponse) : getResponse;

  invokeResponseOrCallback(res, callback, 200, mappedResponse);
};

export const forwardGetApiUnPaged = async (
  forwardUrl: string,
  res: NextApiResponse,
  useToken: boolean,
  mapper: any,
  callback: any = null
) => {
  const getResponse = await fetchJsonResponse(forwardUrl, useToken);

  if (!getResponse) {
    console.log(`Fetching ${forwardUrl} resulted in Not Found (404)`);
    invokeResponseOrCallback(res, callback, 404, getResponse);
    return;
  }

  const mappedResponse = mapper != null ? mapper(getResponse) : getResponse;

  invokeResponseOrCallback(res, callback, 200, mappedResponse);
};

export const forwardPostApi = async (
  forwardUrl: string,
  req: any,
  res: NextApiResponse,
  mapper: any,
  callback: any = null
) => {
  const { body } = req;
  const method = "POST";

  const postResponse = await sendData(method, forwardUrl, { data: body });
  if (!postResponse.data) {
    console.log(`Posting ${forwardUrl} resulted in error:`, postResponse.error);
    invokeResponseOrCallback(res, callback, 404, postResponse.error);

    return;
  }

  invokeResponseOrCallback(
    res,
    callback,
    200,
    mapper ? mapper(postResponse.data) : postResponse.data
  );
};

export const forwardPutApi = async (
  forwardUrl: string,
  req: NextApiRequest,
  res: NextApiResponse,
  mapper: any,
  callback: any = null
) => {
  const { body } = req;
  const method = "PUT";

  const putResponse = await sendData(method, forwardUrl, { data: body });
  if (!putResponse.data) {
    console.log(`Putting ${forwardUrl} resulted in error:`, putResponse.error);
    invokeResponseOrCallback(res, callback, 400, putResponse.error);

    return;
  }

  invokeResponseOrCallback(
    res,
    callback,
    200,
    mapper ? mapper(putResponse.data) : putResponse.data
  );
};

const invokeResponseOrCallback = (
  res: NextApiResponse,
  callback: any,
  status: number,
  payload: any
) => {
  if (callback) callback(status, payload);
  else res.status(status).json(payload);
};
