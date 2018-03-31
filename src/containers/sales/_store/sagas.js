import { put, takeEvery } from 'redux-saga/effects';
import types from './types';
import apis from '../apis';

function* fetchLeads() {
  console.log('fetching leads...');
  yield apis.fetchLeads();
  yield put({ type: types.FETCH_LEADS_SUCCESS });
}

function* fetchLeadsWatcher() {
  yield takeEvery(types.FETCH_LEADS, fetchLeads);
}

export default {
  fetchLeadsWatcher,
};
