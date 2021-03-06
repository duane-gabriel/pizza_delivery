import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadRequest: null, // LOAD_REQUEST
  loadSuccess: ['data'],
  loadFailure: null,
  updateStageRequest: ['data'],
});

export const OrderTypes = Types;

export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
});

export const reducers = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
  // [Types.UPDATE_STAGE_REQUEST]: (state, { data }) => state.merge({ data }),
});
