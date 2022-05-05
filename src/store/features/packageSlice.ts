import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PackageProps } from '../../types'

interface PackageState {
    value: PackageProps[]
}

const initialState: PackageState = {
    value: [
        {
            name: 'Teste',
            amount: 10,
            batch: '1',
            code: '10',
            expiringDate: '27/04/2022',
            manufacturingDate: '27/04/2022',
            origin: 'A'
        },
        {
            name: 'Teste',
            amount: 11,
            batch: '1',
            code: '1010',
            expiringDate: '27/04/2022',
            manufacturingDate: '27/04/2022',
            origin: 'A'
        }
    ]
}

export const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {
        addPackage: (state, action: PayloadAction<PackageProps>) => {
            state.value.push(action.payload)
        },

        readPackage: (state, action: PayloadAction<PackageProps>) => {
            state.value.filter((item) => item === action.payload)
        },

        deletePackage: (state, action: PayloadAction<string>) => {
            const index = state.value.findIndex(
                (item) => item.code === action.payload
            )

            if (index !== -1) state.value.splice(index, 1)
        }
    }
})

export const { readPackage, deletePackage } = packagesSlice.actions

export default packagesSlice.reducer
