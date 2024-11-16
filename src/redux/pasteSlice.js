import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
};

const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste added successfully');
    },
    updateToPastes: (state, action) => {
      const { id, updatedPaste } = action.payload;
      const index = state.pastes.findIndex((paste) => paste.id === id);
      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste updated successfully');
      } else {
        toast.error('Paste not found');
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('All pastes have been reset');
    },
    removeFromPastes: (state, action) => {
      const id = action.payload;
      state.pastes = state.pastes.filter((paste) => paste._id !== id);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste removed successfully');
    },
  },
});

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions;
export default pasteSlice.reducer;
