import { combineReducers } from 'redux';

import {
  LOAD_CHANNELS,
  LOAD_CHANNELS_SUCCESS,
  LOAD_CHANNELS_ERROR
} from 'constants/actionTypes/channels';

export const initialState = {
  loading: false,
  updatedAt: null,
  entities: {}
};

export default combineReducers({
  entities,
  loading,
  updatedAt
});

export function entities(state = initialState.entities, action) {
  switch (action.type) {
    case LOAD_CHANNELS_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
}

export function loading(state = initialState.loading, action) {
  switch (action.type) {
    case LOAD_CHANNELS:
      return true;
    case LOAD_CHANNELS_SUCCESS:
    case LOAD_CHANNELS_ERROR:
      return false;
    default:
      return state;
  }
}

export function updatedAt(state = initialState.updatedAt, action) {
  switch (action.type) {
    case LOAD_CHANNELS_SUCCESS:
      return action.meta.timestamp;
    default:
      return state;
  }
}
