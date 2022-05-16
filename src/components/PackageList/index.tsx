import React from 'react'
import { PackageProps } from '../../types'
import Header from '../Header'
import Item from '../Item'

interface PackageListProps {
    selected: string
    setSelected: (selected: string) => void
    searchCode: string,
    data: PackageProps[],
}

const PackageList = ({
    selected,
    setSelected,
    searchCode,
    data
}: PackageListProps) => {
    return (
        <div className="w-[27rem] h-full bg-zinc-700 rounded-lg">
            <Header title="Lista de Pacotes" />
            <div
                id="package-list-content"
                className="flex flex-col items-center"
            >
                {data
                    .filter((item) => {
                        if (searchCode === '') return true
                        return item.batch.includes(searchCode)
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
