import React from 'react'
import { useDispatch } from 'react-redux'
import { useReduxState } from '../../hooks/useReduxState'
import { setPackage } from '../../store/features/packageDetailsSlice'
import {
    asyncDeletePackage,
    asyncUpdatePackage
} from '../../store/Package.store'

interface FormProps {
    placeholder: string
    buttonText?: string
    disabled?: boolean
    button?: boolean
    onChange: (text: string) => void
    take?: string
}

const Form = ({
    placeholder,
    buttonText,
    disabled = false,
    button,
    onChange,
    take = ''
}: FormProps) => {
    const { packagesDetails } = useReduxState()
    const dispatch = useDispatch()

    return (
        <div id="form-form">
            <input
                type="text"
                id="form-input"
                className="h-14"
                style={{ width: button ? '73%' : '95%' }}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(e) => onChange(e.target.value)}
            />

            {button ? (
                <button
                    className=" w-28 h-14 ml-5 rounded-md bg-blue-700 text-white font-medium text-2xl hover:bg-blue-600 transition-colors disabled:bg-blue-300"
                    disabled={disabled}
                    onClick={() => {
                        if (packagesDetails.value) {
                            const pck = {
                                ...packagesDetails.value,
                                amount:
                                    packagesDetails.value.amount -
                                    parseInt(take, 10)
                            }

                            const condition =
                                packagesDetails.value.amount -
                                parseInt(take, 10)

                            if (condition >= 0) {
                                if (condition === 0) {
                                    dispatch(
                                        asyncDeletePackage(
                                            packagesDetails.value
                                        )
                                    )
                                    dispatch(setPackage(null))
                                } else {
                                    dispatch(setPackage(pck))
                                    dispatch(asyncUpdatePackage(pck))
                                }
                            }
                        }
                    }}
                >
                    {buttonText}
                </button>
            ) : null}
        </div>
    )
}

export default Form
