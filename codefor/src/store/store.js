import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../slice/contentSlice";
import dataReducer from "../slice/dataSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    data: dataReducer,
  },
});
