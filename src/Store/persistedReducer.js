import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../features/TodoList/sessionReducer'; // Import your root reducer

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;