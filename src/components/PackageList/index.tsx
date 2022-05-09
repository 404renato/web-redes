import React from 'react'
import Item from '../Item'
import Header from '../Header'
import { useReduxState } from '../../hooks/useReduxState'

interface PackageListProps {
    selected: string
    setSelected: (selected: string) => void
    searchCode: string
}

const PackageList = ({
    selected,
    setSelected,
    searchCode
}: PackageListProps) => {
    const { packages } = useReduxState()

    return (
        <div className="w-[25rem] h-full bg-zinc-700 rounded-lg">
            <Header title="Lista de Pacotes" />
            <div
                id="package-list-content"
                className="flex flex-col items-center"
            >
                {packages.value
                    .filter((item) => {
                        if (searchCode === '') return true
                        if (item.code.includes(searchCode)) return item
                    })
                    .map((item) => (
                        <Item
                            pck={item}
                            selected={selected === item.code}
                            setSelected={() => {
                                selected === item.code
                                    ? setSelected('')
                                    : setSelected(item.code)
                            }}
                        />
                    ))}
            </div>
        </div>
    )
}

export default PackageList
