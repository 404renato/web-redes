import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getInstance } from './../api/axios'
import { PackageProps } from './../types/index'
import { AppDispatch, AppThunk } from './index'

export interface PackageState {
    value: PackageProps[]
}

const initialState = {
    value: []
} as PackageState

const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        // addPackage: (state, action: PayloadAction<PackageProps>) => {
        //     state.value.push(action.payload)
        // },

        // readPackage: (state, action: PayloadAction<PackageProps>) => {
        //     state.value.filter((item) => item === action.payload)
        // },

        updatePackage: (state, action: PayloadAction<PackageProps>) => {
            const index = state.value.findIndex(
                (item) => item.code === action.payload.code
            )
            state.value[index] = action.payload
        },

        deletePackage: (state, action: PayloadAction<PackageProps>) => {
            const index = state.value.findIndex(
                (item) => item.id === action.payload.id
            )

            if (index !== -1) state.value.splice(index, 1)
        },

        getPackages: (state, action: PayloadAction<PackageProps[]>) => {
            state.value = action.payload
        }
    }
})

export const {
    // addPackage,
    // readPackage,
    updatePackage,
    deletePackage,
    getPackages
} = packageSlice.actions

export default packageSlice.reducer

// export function asyncAddPackage(pck: PackageProps): AppThunk {
//     return async function (dispatch: AppDispatch) {
//         const instance = await getInstance()
//         await instance.post('/stock', pck)

//         dispatch(addPackage(pck))
//     }
// }

// export function asyncReadPackage(pck: PackageProps): AppThunk {
//     return async function (dispatch: AppDispatch) {
//         dispatch(readPackage(pck))
//     }
// }

export function asyncUpdatePackage(pck: PackageProps): AppThunk {
    return async function (dispatch: AppDispatch) {
        try {
            console.log('aaa')
            const instance = await getInstance()
            const response = await instance.get('/stock')
            console.log(response.data)
            dispatch(updatePackage(pck))
        } catch (error) {}
    }
}

export function asyncDeletePackage(pck: PackageProps): AppThunk {
    return async function (dispatch: AppDispatch) {
        dispatch(deletePackage(pck))
    }
}

export function asyncGetPackages(): AppThunk {
    return async function (dispatch: AppDispatch) {
        try {
            const instance = await getInstance()
            const response = await instance.get('/stock')
            dispatch(getPackages(response.data))
        } catch (error) {}
    }
}
