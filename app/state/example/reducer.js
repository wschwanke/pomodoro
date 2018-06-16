/**
 * Internal dependencies
 */
import { EXAMPLE } from '../action-types';

const initialState = {
  status: 'PENDING',
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
        ...action.payload,
      };
    default: return state;
  }
};

export default example;
