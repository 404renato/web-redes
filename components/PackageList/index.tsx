import React, { useState } from 'react'
import Header from '../Header'
import Item from '../Item'
import { PackageProps } from '../Item'

const pcks: PackageProps[] = [
    {
        name: 'Teste',
        amount: 10,
        batch: '1',
        code: '1',
        expiringDate: '27/04/2022',
        manufacturingDate: '27/04/2022',
        origin: 'A'
    },
    {
        name: 'Teste',
        amount: 10,
        batch: '1',
        code: '2',
        expiringDate: '27/04/2022',
        manufacturingDate: '27/04/2022',
        origin: 'A'
    }
]

interface PackageListProps {
    selected: number
    setSelected: (selected: number) => void
}

const PackageList = ({ selected, setSelected }: PackageListProps) => {
    return (
        <div id="package-list-container">
            <Header title="Lista de Pacotes" bgColor="#00FF77" />
            <div id="package-list-content">
                {pcks.map((item, index) => (
                    <Item
                        pck={item}
                        selected={selected === index}
                        setSelected={() => {
                            selected === index
                                ? setSelected(-1)
                                : setSelected(index)
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default PackageList
