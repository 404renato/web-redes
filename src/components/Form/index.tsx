import React from 'react'
import { useDispatch } from 'react-redux'
import { useReduxState } from '../../hooks/useReduxState'

interface FormProps {
    placeholder: string
    buttonText?: string
    disabled?: boolean
    disabledButton?: boolean,
    button?: boolean
    onChange: (text: string) => void
    take?: string,
    onSubmit?: ()=> void
}

const Form = ({
    placeholder,
    buttonText,
    disabled = false,
    disabledButton = false,
    button,
    onChange,
    take = '',
    onSubmit
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
                    disabled={disabledButton}
                    onClick={onSubmit}
                >
                    {buttonText}
                </button>
            ) : null}
        </div>
    )
}

export default Form
