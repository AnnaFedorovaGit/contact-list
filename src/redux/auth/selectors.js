import { createSelector } from '@reduxjs/toolkit';


export const selectAuth = state => state.auth;
// export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthIsLoading = createSelector(
  selectAuth,
  auth => auth.isLoading
);
export const selectAuthError = createSelector(selectAuth, auth => auth.error);
export const selectAuthToken = createSelector(selectAuth, auth => auth.token);
export const selectAuthUserData = createSelector(selectAuth, auth => auth.user);
export const selectAuthIsSignedIn = createSelector(
  selectAuth,
  auth => auth.isSignedIn
);
