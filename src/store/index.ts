import { PackageProps } from './../types/index'
import {
    Action,
    AnyAction,
    configureStore,
    Dispatch,
    ThunkAction,
    ThunkDispatch
} from '@reduxjs/toolkit'

import packageSlice, { PackageState } from './Package.store'
import packageDetailsSlice from './features/packageDetailsSlice'
import { useDispatch } from 'react-redux'

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
