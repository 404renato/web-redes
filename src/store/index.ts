import { configureStore } from '@reduxjs/toolkit'
import packageReducer from './features/packageSlice'
import packageDetailsSlice from './features/packageDetailsSlice'

const store = configureStore({
    reducer: {
        packages: packageReducer,
        packagesDetails: packageDetailsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
