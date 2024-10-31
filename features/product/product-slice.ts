import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import useSWR from "swr";
import { fetcher } from "../../utils/fetch";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  noProductImageUrl: "",
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      if (!action.payload) return;

      productsAdapter.setAll(state, action.payload);
    })
    .addCase(fetchNoProductImage.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.noProductImageUrl = action.payload[0].image.original;
    });
  },
});

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = useSWR("/api/products", fetcher);
    return data;
  }
);

export const fetchNoProductImage = createAsyncThunk(
  "products/fetchNoProductImage",
  async () => {
    const { data } = useSWR(
      "/api/image-library?filters[key]=noProductImage",
      fetcher
    );
    return data;
  }
);

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state: any) => state.products);
