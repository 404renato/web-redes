import React from 'react'
import Header from '../Header'
import Item from '../Item'
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
    const { packages, packagesDetails } = useReduxState()

    return (
        <div id="package-list-container">
            <Header title="Lista de Pacotes" bgColor="#00FF77" />
            <div id="package-list-content">
                {/* {packages.value.map((item, index) => (
                    <Item
                        pck={item}
                        selected={selected === index}
                        setSelected={() => {
                            selected === index
                                ? setSelected(-1)
                                : setSelected(index)
                        }}
                    />
                ))} */}
                {packages.value
                    .filter((item) => {
                        if (searchCode === '') return true
                        if (item.code.includes(searchCode)) return item
                    })
                    .map((item, index) => (
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
