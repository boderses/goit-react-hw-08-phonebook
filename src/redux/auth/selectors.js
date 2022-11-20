export const authIsLoggedInSelector = state => state.auth.isLoggedIn;

export const authUserSelector = state => state.auth.user.name;

export const authIsRefreshingSelector = state => state.auth.isRefreshing;
