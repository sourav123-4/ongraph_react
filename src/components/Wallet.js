import React from 'react'
import './styles/wallet.css'
export default function Wallet(props) {
    return (
        <div className='wallet'>
            <h1>Wallet:${props.money}</h1>
        </div>
    )
}