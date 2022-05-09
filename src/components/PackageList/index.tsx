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
        <div id="package-list-container">
            <Header title="Lista de Pacotes" bgColor="#00FF77" />
            <div id="package-list-content">
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
