import { combineReducers } from '@reduxjs/toolkit';
import demoReducer from './demoReducer';

const rootReducer = combineReducers({ demo: demoReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
