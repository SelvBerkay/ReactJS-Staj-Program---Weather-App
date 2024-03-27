import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './features/weatherSlice'

export default configureStore({
  reducer: {
    weather : weatherSlice,
  },
})