import { combineReducers } from 'redux';

import filtersReducer from '../slices/Userslice';

const rootReducer = combineReducers({
    User: Userslice.reducer,
});

export default rootReducer;