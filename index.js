import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { reducer } from './todoListRedux'
import App from './App';

// autoRehydrate middleware to redux store
const store = createStore(reducer, undefined, autoRehydrate())

// Enabling persistence
persistStore(store, { storage: AsyncStorage })

// Passing store into Provider
const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('TODO_list', () => AppWithStore);
