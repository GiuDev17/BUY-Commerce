import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../components/util/getconfig";
import { setIsLoading } from "./isLoading.slice";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (state, action) => {
      return action.payload;
    }
  }
});  //minuto 34    minu 1.15

export const getFavoritesThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios.get("https://e-commerce-api.academlo.tech/api/v1/purchases", getConfig())
    .then((res) => dispatch(setFavorites(res.data.data.purchases)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
