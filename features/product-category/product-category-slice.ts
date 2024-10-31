import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import useSWR from "swr";
import { fetcher } from "../../utils/fetch";

const productCategoryAdapter = createEntityAdapter();

const initialState = productCategoryAdapter.getInitialState({
  activeCategory: "",
});

const productCategorySlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {
    activeCategoryChanged: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchProductCategories.fulfilled, (state, action) => {
      if (!action.payload) return;
      console.log("Categories", action.payload);

      productCategoryAdapter.setAll(state, action.payload);
    });
  },
});
export default productCategorySlice.reducer;

export const { activeCategoryChanged } = productCategorySlice.actions;

export const fetchProductCategories = createAsyncThunk(
  "productCategories/fetchProductCategories",
  async () => {
    const { data } = useSWR("/api/product-categories", fetcher);
    return data;
  }
);

export const { selectAll: selectAllProductCategories } =
  productCategoryAdapter.getSelectors((state: any) => state.productCategories);

export const selectActiveCategory = (state: any) =>
  state.productCategories.activeCategory;
