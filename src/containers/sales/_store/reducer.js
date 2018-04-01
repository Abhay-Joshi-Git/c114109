import { combineReducers } from 'redux';
import types from './types';

const leadsInitialState = [];

const leadsReducer = (state = leadsInitialState, action) => {
  switch (action.type) {
    case types.FETCH_LEADS_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
};

const oppInitialState = [];

const opportunitiesReducer = (state = oppInitialState, action) => {
  switch (action.type) {
    case types.FETCH_OPPORTUNITIES_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};

export default combineReducers({
  leads: leadsReducer,
  opportunities: opportunitiesReducer,
});
