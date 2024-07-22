import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import booksReducer from './slice/book';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        books: booksReducer,
    },
});
