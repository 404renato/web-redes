import React from 'react'
import Header from '../Header'
import Item from '../Item'

const PackageList = () => {
    return (
        <div id="package-list-container">
            <Header title="Lista de Pacotes" bgColor="#00FF77" />
            <div id="package-list-content">
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default PackageList
