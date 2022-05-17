import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import packageDetailsSlice from './features/packageDetailsSlice'
import packageSlice from './Package.store'

const store = configureStore({
    reducer: {
        packages: packageSlice,
        packagesDetails: packageDetailsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, undefined, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
