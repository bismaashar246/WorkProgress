import React from 'react';
import { Provider } from 'react-redux';
import List from './List';
import store from './app/store';


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <List />
            </div>
        </Provider>
    );
}

export default App;
