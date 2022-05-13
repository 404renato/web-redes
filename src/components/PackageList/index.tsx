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
        <div className="w-[27rem] h-full bg-zinc-700 rounded-lg">
            <Header title="Lista de Pacotes" />
            <div
                id="package-list-content"
                className="flex flex-col items-center"
            >
                {packages.value
                    .filter((item) => {
                        if (searchCode === '') return true
                        if (item.id.includes(searchCode)) return item
                    })
                    .map((item) => (
                        <Item
                            pck={item}
                            selected={selected === item.id}
                            setSelected={() => {
                                selected === item.id
                                    ? setSelected('')
                                    : setSelected(item.id)
                            }}
                        />
                    ))}
            </div>
        </div>
    )
}

export default PackageList
