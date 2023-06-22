import { createSlice } from '@reduxjs/toolkit';

const initialPostsState = {
  companiesList: [],

  selectedCard: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState: initialPostsState,
  reducers: {
    addCompany(state, action) {
      state.companiesList.push(action.payload);
    },
  },
});

export const companyActions = companySlice.actions;

export default companySlice;
