import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../component/CounterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
