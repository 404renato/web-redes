import React from 'react'
import { useDispatch } from 'react-redux'
import { useReduxState } from '../../hooks/useReduxState'
import { setPackage } from '../../store/features/packageDetailsSlice'
import { deletePackage, updatePackage } from '../../store/features/packageSlice'

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
                style={{ width: button ? '70%' : '92.5%' }}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(e) => onChange(e.target.value)}
            />

            {button ? (
                <button
                    id="form-submit"
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
                                if (condition === 0)
                                    dispatch(
                                        deletePackage(
                                            packagesDetails.value.code
                                        )
                                    )
                                else {
                                    dispatch(setPackage(pck))
                                    dispatch(updatePackage(pck))
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
