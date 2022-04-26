import React from 'react'
import Image from 'next/image'
import CrateIcon from '../../assets/crate-icon.png'

const Item = () => {
    return (
        <div id="package-list-item">
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
                <p id="package-list-item-name">Nome do Pacote</p>
                <p id="package-list-item-amount">
                    Quantidade: <span>20</span>
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
                        Código: <span>2</span>
                    </p>
                    <p id="package-list-item-field">
                        Lote: <span>2</span>
                    </p>
                    <p id="package-list-item-field">
                        Origem: <span>2</span>
                    </p>
                </div>

                <div
                    style={{
                        float: 'right',
                        marginRight: 15
                    }}
                >
                    <p id="package-list-item-field">
                        Fabricação: <span>25/04/2022</span>
                    </p>
                    <p id="package-list-item-field">
                        Validade: <span>25/04/2022</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Item
