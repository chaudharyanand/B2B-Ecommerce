import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import useSWR from "swr";
import { fetcher } from "../../utils/fetch";

const translateAdapter = createEntityAdapter();

const initialState = translateAdapter.getInitialState({
  translatedTexts: [],
});

const translateSlice = createSlice({
  name: "translatedTexts",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(fetchTranslatedTexts.fulfilled, (state, action) => {
      if (!action.payload) return;

      translateAdapter.setAll(state, action.payload);
    });
  },
});
export default translateSlice.reducer;

export const fetchTranslatedTexts = createAsyncThunk(
  "translatedTexts/fetchTranslatedTexts",
  async () => {
    const { data } = useSWR("/api/translate", fetcher);
    return data;
  }
);

export const { selectAll: selectAllTranslatedTexts } =
  translateAdapter.getSelectors((state: any) => state.translatedTexts);
