import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    query: { 
        type: 'Rent',
        typee:"",
        title: '',
        bedrooms: '',
        address: '',
        bathrooms: '',
        minPrice: '',
        maxPrice: ''
    }, 
    items: []
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateQuery(state, action) {
            state.query = {
                ...state.query,
                ...action.payload
            };
        }, 
        setItems(state, action) {
            state.items = action.payload;
        }
    }
});

export const { updateQuery, setItems } = searchSlice.actions;
export default searchSlice;
