import React, {Component} from 'react';
import { Provider} from 'react-redux';
import configureStore from "./redux/store/configureStore";
import Users from "./componets/Users/Users";

const store = configureStore();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Users />
            </Provider>
        )
    }
}

window.store = store; // Необходим, для работы с getState()

export default App;