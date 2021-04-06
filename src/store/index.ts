import { applyMiddleware, combineReducers, createStore } from 'redux';
import { speciesSelector } from './reducers/speciesSelector.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  species: speciesSelector
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);

export type AppState = ReturnType<typeof rootReducer>;
