import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, refreshThunk, logoutThunk } from "./operations";


const initState = {
    token: null,
    user: {
        name: null,
        email: null,
    },
    isSignedIn: false,
    isLoading: false,
    error: null,
};

const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.isSignedIn = true;
    state.token = action.payload.token;
    state.user = action.payload.user;
};

const authSlice = createSlice({
    name: "auth",
    initialState: initState,
    extraReducers: (builder) => builder
        // ---------- REGISTER USER ----------------
        // ---------- LOGIN USER -------------------
        .addCase(registerThunk.fulfilled, handleFulfilled) 
        .addCase(loginThunk.fulfilled, handleFulfilled) 
        // ---------- REFRESH USER ------------------
        .addCase(refreshThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSignedIn = true;
            state.user = action.payload;
        })
         // ---------- LOGOUT USER ------------------
        .addCase(logoutThunk.fulfilled, () => {
            return initState;
        })

        .addMatcher(isAnyOf(registerThunk.pending, loginThunk.pending, refreshThunk.pending, logoutThunk.pending ),
            state => {
                state.isLoading = true;
                state.error = null;
            }
        )
        .addMatcher(isAnyOf(registerThunk.rejected, loginThunk.rejected, refreshThunk.rejected, logoutThunk.rejected ),
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        )
});


export const authReducer = authSlice.reducer;