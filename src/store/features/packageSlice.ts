import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PackageProps } from '../../types'
import axios from 'axios'

interface PackageState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    value: PackageProps[]
}

const initialState = {
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
        },
        {
            name: 'Teste',
            amount: 11,
            batch: '3',
            code: '1012',
            expiringDate: '27/04/2022',
            manufacturingDate: '27/04/2022',
            origin: 'A'
        }
    ],
    loading: 'idle'
} as PackageState

const getPackages = createAsyncThunk(
    'packages/getPackages',
    async (thunkAPI) => {
        const res = await axios.get('https://localhost:4000/stock')
        if (res) console.log(res.data)

        return res.data
    }
)

const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {
        addPackage: (state, action: PayloadAction<PackageProps>) => {
            state.value.push(action.payload)
        },

        readPackage: (state, action: PayloadAction<PackageProps>) => {
            state.value.filter((item) => item === action.payload)
        },

        updatePackage: (state, action: PayloadAction<PackageProps>) => {
            const index = state.value.findIndex(
                (item) => item.code === action.payload.code
            )
            state.value[index] = action.payload
        },

        deletePackage: (state, action: PayloadAction<string>) => {
            const index = state.value.findIndex(
                (item) => item.code === action.payload
            )

            if (index !== -1) state.value.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPackages.fulfilled, (state, action) => {
            state.loading = 'succeeded'
        })
    }
})

// export const { addPackage, readPackage, updatePackage, deletePackage } =
//     packagesSlice.actions

export default packagesSlice.reducer
