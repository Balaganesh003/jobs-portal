import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialPostsState = {
  companiesList: [],

  selectedCard: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState: initialPostsState,
  reducers: {
    addCompany: (state, action) => {
      const newCompany = action.payload;
      state.companiesList.some(
        (company) => company.companyName === newCompany.companyName
      )
        ? alert('Company already exists')
        : state.companiesList.push(newCompany);
    },
  },
});

export const companyActions = companySlice.actions;

export default companySlice;
