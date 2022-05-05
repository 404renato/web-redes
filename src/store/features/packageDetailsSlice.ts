import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PackageProps } from '../../types'

interface PackageDetailsState {
    value: PackageProps | null
}

const initialState: PackageDetailsState = {
    value: null
}

export const packageDetailsSlice = createSlice({
    name: 'packageDetails',
    initialState,
    reducers: {
        setPackage: (state, action: PayloadAction<PackageProps | null>) => {
            state.value = action.payload
        }
    }
})

export const { setPackage } = packageDetailsSlice.actions
export default packageDetailsSlice.reducer
