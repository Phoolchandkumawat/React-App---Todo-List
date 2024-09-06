import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/TodoList/TodoSlice';
import { createStore, applyMiddleware } from 'redux';
import persistedReducer from './persistedReducer';
import {thunk} from 'redux-thunk'; // If you're using thunk middleware

const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;

export const Store = configureStore(
    {
        reducer: todoReducer
    }
)