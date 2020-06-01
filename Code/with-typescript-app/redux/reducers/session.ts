import { SessionActionType, SessionAction } from '../action';

interface SessionState {
  user?: any;
}
const initialState = {
  user: undefined
} as SessionState;

const sessionReducer = (state = initialState, action: SessionAction) => {
  switch (action.type) {
    case SessionActionType.SAVE_USER: {
      const { user } = action;
      return { user };
    }
    case SessionActionType.REMOVE_USER: {
      return { user: undefined };
    }
    default: {
      return state;
    }
  }
};
export default sessionReducer;
