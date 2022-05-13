import React from 'react'
interface HeaderProps {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div className="bg-blue-500 w-full h-[15vh] rounded-lg justify-items-center pt-2 flex">
            <h1 id="title">{title}</h1>
        </div>
    )
}

export default Header
