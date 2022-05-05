import React, { ChangeEvent, ChangeEventHandler } from 'react'

interface FormProps {
    placeholder: string
    buttonText?: string
    disabled?: boolean
    button?: boolean
    onChange: (text: string) => void
    onSubmit?: (text: string) => void
}

const Form = ({
    placeholder,
    buttonText,
    disabled = false,
    button,
    onChange,
    onSubmit
}: FormProps) => {
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

            {button && onSubmit ? (
                <button
                    onSubmit={() => console.log('a')}
                    id="form-submit"
                    disabled={disabled}
                >
                    {buttonText}
                </button>
            ) : null}
        </div>
    )
}

export default Form
