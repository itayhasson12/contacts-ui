import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DrawerState {
  isOpen: boolean;
  contact: object;
}

const initialState: DrawerState = {
  isOpen: false,
  contact: {},
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
      if (!action.payload) state.contact = null;
    },
    setDrawerObject: (state, action: PayloadAction<object>) => {
      state.contact = action.payload;
    },
  },
});

export const { setIsDrawerOpen, setDrawerObject } = drawerSlice.actions;
export default drawerSlice.reducer;
