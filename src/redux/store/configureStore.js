import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/';
import saga from '../reducers/saga';

const sagaMiddleware = createSagaMiddleware();

export default function() {

    const store =  createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    sagaMiddleware.run(saga);

    return store;
}