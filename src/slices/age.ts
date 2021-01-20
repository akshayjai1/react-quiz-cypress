import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios';
// import { userAPI } from './userAPI'
const userAPI = 'https://cors-anywhere.herokuapp.com/https://backend-for-test-1.herokuapp.com/age';
// First, create the thunk
export const postAge = createAsyncThunk(
  'age/postAge',
    async ({ name, dateOfBirth }: { name: string, dateOfBirth: string }, thunkAPI) => {
        debugger;
        console.log(name, dateOfBirth);
      const response = await Axios.post(
          userAPI,
            {
              name,dateOfBirth
          },
    )
    return response.data
  }
)
const initialState:any = {
        peoples: [],
        lastPerson:{}
  }
const inc = createSlice({
    initialState,
  name: "age",
  reducers: {
    // increment: (state, action) => {
    //   console.log("incrementing");
    //   state += 1;
    //   debugger;
    //   return state;
    // },
    // incrementAsync: (state, action) => {
    //   console.log("in incrementAsync reducer");
    //   debugger;
    //   return state;
    // },
    },
    extraReducers: {
        [postAge.pending.type]: (state, action) => {
            debugger;
            console.log(state, action);
            return state;
        },
        [postAge.fulfilled.type]: (state, action) => {
            debugger;
            console.log(state, action);
            state.peoples.push(action.payload)
            return state;
      }
  }
});
export const { actions, reducer } = inc;
// export const { increment, incrementAsync } = actions;
