import { watcherLoginSaga } from './watcherLoginSaga';

export function* mainSaga() {
  yield watcherLoginSaga();
}
