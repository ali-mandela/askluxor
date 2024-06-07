import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import searchSlice from './searchSlice'
import agentSlice from './agentSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    search: searchSlice.reducer,
    agent: agentSlice.reducer,
  },
});
