import { configureStore } from '@reduxjs/toolkit'
import invoicerReducer from './invoicerSlice'


export const store = configureStore({
  reducer: {
    invoicer: invoicerReducer
  },
})