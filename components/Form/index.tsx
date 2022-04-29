import React from 'react'

interface FormProps {
    placeholder: string
    buttonText: string
    disabled?: boolean
}

const Form = ({ placeholder, buttonText, disabled = false }: FormProps) => {
    return (
        <form action="" id="form-form">
            <input
                type="text"
                id="form-input"
                placeholder={placeholder}
                disabled={disabled}
            />
            <input
                type="submit"
                value={buttonText}
                id="form-submit"
                disabled={disabled}
            />
        </form>
    )
}

export default Form
