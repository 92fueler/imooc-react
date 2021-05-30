import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios';

function* fetchInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action)
    } catch (e) {
        console.error(e)
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, fetchInitList);
}

export default mySaga;