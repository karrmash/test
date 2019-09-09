import { takeEvery, put, call } from 'redux-saga/effects'
import {API_DATA, GET_DATA} from "../actions/users";

/**
 * Запускается сага, если пришел action API_DATA
 * @returns {IterableIterator<ForkEffect>}
 */
function* saga() {
    yield takeEvery("API_DATA", getDataApi);
}

/**
 * Получаем данные по users и тудушке из API
 * @returns {IterableIterator<*>}
 */
function* getDataApi() {

    let data = {
        list: [],
        todo: []
    };

    data.list = yield call(() => {
            return  fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
        }
    );

    data.todo = yield call(() => {
            return  fetch('https://jsonplaceholder.typicode.com/users/1/todos')
                .then(response => response.json())
        }
    );

    yield put(getData(data));
}

/**
 * Передаем данные, полученные из API в хранилище
 * @param data
 * @returns {{type: string, data: *}}
 */
function getData(data) {
    return {type: 'GET_DATA', data};
}

export default saga;
