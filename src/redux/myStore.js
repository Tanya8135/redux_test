import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

const tasksPersistConfig = {
    key: 'tasks',
    storage,
};

const filtersPersistConfig = {
    key: 'filters',
    storage,
};

const persistedTasksReducer = persistReducer(tasksPersistConfig, tasksReducer);
const persistedFiltersReducer = persistReducer(filtersPersistConfig, filtersReducer);

export const myStore = configureStore({
    reducer: {
        tasks: persistedTasksReducer,
        filters: persistedFiltersReducer,
    },
});

export const persistor = persistStore(myStore);