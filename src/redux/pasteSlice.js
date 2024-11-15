import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
};

const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      state.value += 1;
    },
    updateToPastes: (state,action) => {
      state.value -= 1;
    },
    resetAllPastes: (state, action) => {
      state.value += action.payload;
    },
    removeFromPastes: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions;
export default pasteSlice.reducer;
