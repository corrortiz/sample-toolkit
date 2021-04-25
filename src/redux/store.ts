import { createStore } from "redux";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
