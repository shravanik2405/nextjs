import { watcherLoginSaga } from './watcherSaga';

export function* mainSaga() {
  yield watcherLoginSaga();
}
