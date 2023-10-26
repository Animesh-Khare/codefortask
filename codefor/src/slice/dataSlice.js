import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    folderName: "assets",
    isfile: false,
    files: [
      {
        idfile: Math.random(),
        name: "asset 1",
        content: "I am asset one",
      },
      {
        idfile: Math.random(),
        name: "asset 2",
        content: "I am asset two",
      },
      {
        idfile: Math.random(),
        name: "asset 3",
        content: "I am asset three",
      },
    ],
  },
  {
    id: 2,
    folderName: "components",
    isfile: false,
    files: [
      {
        idfile: Math.random(),
        name: "component 1",
        content: "I am component one",
      },
      {
        idfile: Math.random(),
        name: "component 2",
        content: "I am component two",
      },
      {
        idfile: Math.random(),
        name: "component 3",
        content: "I am component three",
      },
    ],
  },
  {
    id: 3,
    folderName: "screens",
    isfile: true,
    files: [
      {
        idfile: Math.random(),
        name: "screen 1",
        content: "I am screen one",
      },
      {
        idfile: Math.random(),
        name: "screen 2",
        content: "I am screen two",
      },
      {
        idfile: Math.random(),
        name: "screen 3",
        content: "I am screen three",
      },
    ],
  },
  {
    id: 4,
    folderName: "store",
    isfile: false,
  },
  {
    id: 5,
    folderName: "app.js",
    isfile: false,
  },
  {
    id: 6,
    folderName: "index.js",
    isfile: false,
  },
];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addFolder: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = dataSlice.actions;

export default dataSlice.reducer;
