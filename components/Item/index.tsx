import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CrateIcon from '../../assets/crate-icon.png'

export type PackageProps = {
    name: string
    amount: number
    code: string
    batch: string
    origin: string
    expiringDate: string
    manufacturingDate: string
}
interface ItemProps {
    pck: {
        name: string
        amount: number
        code: string
        batch: string
        origin: string
        expiringDate: string
        manufacturingDate: string
    }
    selected: boolean
    setSelected: () => void
}

const Item = ({ pck, selected, setSelected }: ItemProps) => {
    return (
        <div
            id="package-list-item"
            onClick={() => {
                setSelected()
            }}
            style={{
                border: selected ? '3px solid #00B2FF' : '3px solid transparent'
            }}
        >
            <div
                style={{
                    float: 'left',
                    marginLeft: 30
                }}
            >
                <Image src={CrateIcon} width={60} height={70} />
            </div>

            <div
                style={{
                    float: 'right',
                    marginRight: 30,
                    marginTop: 5,
                    marginBottom: 15
                }}
            >
                <p id="package-list-item-name">{pck.name}</p>
                <p id="package-list-item-amount">
                    Quantidade: <span>{pck.amount}</span>
                </p>
            </div>

            <div id="package-list-item-line" />

            <div id="package-list-item-fields">
                <div
                    style={{
                        float: 'left',
                        marginLeft: 15
                    }}
                >
                    <p id="package-list-item-field">
                        Código: <span>{pck.code}</span>
                    </p>
                    <p id="package-list-item-field">
                        Lote: <span>{pck.batch}</span>
                    </p>
                    <p id="package-list-item-field">
                        Origem: <span>{pck.origin}</span>
                    </p>
                </div>

                <div
                    style={{
                        float: 'right',
                        marginRight: 15
                    }}
                >
                    <p id="package-list-item-field">
                        Fabricação: <span>{pck.manufacturingDate}</span>
                    </p>
                    <p id="package-list-item-field">
                        Validade: <span>{pck.expiringDate}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Item
