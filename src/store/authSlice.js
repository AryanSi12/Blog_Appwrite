import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:null,
    status:false,
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
    login:(state,action)=>{
        state.data=action.payload.data,
        state.status=true
    },
    logout:(state)=>{
        console.log("Hello");
        state.data=null,
        state.status=false
    }
    }
})

export const {login,logout} =authSlice.actions;

export default authSlice.reducer;
