import { createSlice } from "@reduxjs/toolkit";
import { dummyListings } from "../../assets/assets";

const initialState = {
  listings: dummyListings,
  userListings: dummyListings,
  balance: { earned: 0, withdrawn: 0, available: 0 },
};
const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
  },
});

export const { setListings } = listingSlice.actions;
export default listingSlice.reducer;
