import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentLocation: null,
  restaurantData: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
  },
});

export const {setCurrentLocation, setRestaurantData} = dataSlice.actions;

export const selectCurrentLocation = state => state.data.currentLocation;
export const selectRestaurantData = state => state.data.restaurantData;

export default dataSlice.reducer;
