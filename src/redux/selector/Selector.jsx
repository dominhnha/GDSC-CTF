import { createSelector } from '@reduxjs/toolkit';

// export const UserSelector = (state) => state.User;

// export const userRemainingSelector = createSelector(
//     UserSelector,
//   (User) => {
//     return User 
//   }
// );

const user = useSelector(state => state.User.username);