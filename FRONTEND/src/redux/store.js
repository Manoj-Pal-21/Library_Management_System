import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import booksReducer from './slice/book';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: "root",
    blackList: [],
    storage,
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        auth: authReducer,
        books: booksReducer,
    })
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    }
});

export const persistor = persistStore(store);



