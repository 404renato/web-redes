import React from 'react'

interface HeaderProps {
    title: string
    bgColor: string
}

const Header = ({ title, bgColor }: HeaderProps) => {
    return (
        <div id="header" style={{ backgroundColor: bgColor }}>
            <h1 id="title">{title}</h1>
        </div>
    )
}

export default Header
