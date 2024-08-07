import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { original } from '@reduxjs/toolkit'
import axioos from '../axiosInstance/axioos';
// Define your async thunk
export const modifyAndPostData = createAsyncThunk(
  'inputslice/modifyAndPostData',
  async (data, thunkAPI) => {
    console.log(data,"grill1")
    try {
      console.log()
      // Dispatch the modifyValues action first
      const promise1 = thunkAPI.dispatch(modifyValues(data));
// Wait for modifyValues action to complete before dispatching postData
await Promise.all([promise1]);
      
console.log(data,"grill2")
      // Now postData action can be dispatched
      const updatedData = thunkAPI.getState().inputslice.data;
      const response = await axioos.post("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instances?upsert=true", [updatedData]);
      return response
    } catch (error) {
      console.log(error.message,"grill3")
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchData = createAsyncThunk(
  'inputslice/fetchData',
  async (_, thunkAPI) => {
    try {
      const UserId = thunkAPI.getState().loginslice.UserId;
      const response = await axioos.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instances/list");
     console.log("2bhk",response?.data?.entities?.find?.(e=>e.UserId==UserId))
      return response?.data?.entities?.find?.(e=>e.UserId==UserId);
    } catch (error) {
      throw error;
    }
  }
);

// Define your initial state and reducers
const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const inputslice = createSlice({
  name: 'inputslice',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    modifyValues: (state, action) => {
      // Get the original state without the Proxy
      const currentState = original(state);
      console.log(currentState, 'sabu');
      if (currentState.status === "succeeded") {
        state.data = {
          ...currentState.data,
          selectedlist: currentState.data.selectedlist.map((e) => {
            if (e.id === action.payload.id) {
              return action.payload;
            } else {
              return e;
            }
          })
        };
      }
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    
      .addCase(modifyAndPostData.fulfilled, (state, action) => {
      
      })
     }
});

export const { setData, setError, modifyValues } = inputslice.actions;

export default inputslice.reducer;
