import { all, takeLatest } from 'redux-saga/effects';

import { addFavorite } from './favorites';

export default function* rootSage() {
  yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavorite)]);
}
