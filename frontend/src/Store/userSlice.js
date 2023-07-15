import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        reset: () => [],
    }
});

export const { add , reset } = userSlice.actions;
export default userSlice.reducer;

export function fetchStudentDetails() {
    return async function fetchSrtrudentThunk(dispatch, getState) {
        try {
            const res = await axios.post('/user/details', {
                token: localStorage.getItem('token')
            });
            const data = await res.data;
            dispatch(reset());
            dispatch(add(data.user));
        } catch (err) {
            console.log(err);
        }
    };
}