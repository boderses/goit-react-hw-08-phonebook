import { createSelector } from 'reselect';

const authStateSelector = state => state.auth;

export const authIsLoggedInSelector = createSelector(
  authStateSelector,
  data => data.isLoggedIn
);

export const authUserSelector = createSelector(
  authStateSelector,
  data => data.user
);

export const authTokenSelector = createSelector(
  authStateSelector,
  data => data.token
);

export const authIsRefreshingSelector = createSelector(
  authStateSelector,
  data => data.isRefreshing
);
