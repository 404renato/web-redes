import React from 'react'
interface HeaderProps {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div id="header" className="bg-blue-500">
            <h1 id="title">{title}</h1>
        </div>
    )
}

export default Header
