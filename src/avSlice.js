import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
    img: "https://pixabay.com/images/download/business-20031_640.jpg",
    name: "Projectors",
    cost: 200,
    quantity: 0,
    },
    {
    img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
    name: "Speaker",
    cost: 35,
    quantity: 0,
    }
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      
    },
    decrementAvQuantity: (state, action) => {
     
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
