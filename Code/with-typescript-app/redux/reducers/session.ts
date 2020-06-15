import { SessionActionType, SessionAction } from '../action';

export interface SessionState {
  user?: any;
}
const initialState = {
  user: undefined
} as SessionState;

const sessionReducer = (state = initialState, action: SessionAction) => {
  console.log('when is reducer called', state);
  switch (action.type) {
    case SessionActionType.LOGIN_SUCCESS: {
      const { user } = action;
      return { user };
    }

    case SessionActionType.LOGOUT_SUCCESS: {
      return { user: undefined };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
