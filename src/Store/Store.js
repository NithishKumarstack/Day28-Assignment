import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from '../features/feature.js';

const store = configureStore({
    reducer: {
       user: userReducer,
    }
});

export default store;