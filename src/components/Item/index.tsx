import React from 'react'
import Image from 'next/image'
import CrateIcon from '../../assets/crate-icon.png'
import { PackageProps } from '../../types'
import { useDispatch } from 'react-redux'
import { setPackage } from '../../store/features/packageDetailsSlice'

interface ItemProps {
    pck: PackageProps
    selected: boolean
    setSelected: () => void
}

const Item = ({ pck, selected, setSelected }: ItemProps) => {
    const dispatch = useDispatch()

    return (
        <div
            className="w-96 h-60 bg-white rounded-xl mb-3 p-2"
            onClick={() => {
                setSelected()
                dispatch(setPackage(!selected ? pck : null))
            }}
            style={{
                border: selected ? '3px solid #3B82F6' : '3px solid transparent'
            }}
        >
            <div className="float-left ml-5">
                <Image src={CrateIcon} width={60} height={70} />
            </div>

            <div className="float-right mr-5 w-56">
                <p id="package-list-item-name">{pck.name}</p>
                <p id="package-list-item-amount">
                    Quantidade: <span>{pck.amount}</span>
                </p>
            </div>

            <div id="package-list-item-line" className="w-full" />

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
