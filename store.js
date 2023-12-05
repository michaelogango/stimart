import { configureStore } from "@reduxjs/toolkit";
import navReducer from './Slices/navslice';


export const store=configureStore({
    reducer:{

        nav:navReducer,
    },
});