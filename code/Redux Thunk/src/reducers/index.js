import { combineReducers } from 'redux';

import articleReducer from './articleReducer';
import searchReducer from './searchReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  articlesState: articleReducer,
  searchState: searchReducer,
  usersState: usersReducer
});

export default rootReducer;