import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    agents:[],
    topAgents:[],
};

const agentSlice = createSlice({
    name: 'agent',
    initialState ,
    reducers: { 
        setAgents(state, action) {
            state.agents = action.payload;
        },
        setTopAgents(state, action) {
            state.topAgents = action.payload;
        }
    }
});

export const {  setAgents,setTopAgents } = agentSlice.actions;
export default agentSlice;
