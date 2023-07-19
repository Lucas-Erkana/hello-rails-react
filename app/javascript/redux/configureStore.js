import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings';

export default configureStore({ reducer: greetingReducer });
