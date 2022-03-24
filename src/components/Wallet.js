import React from 'react'
export default function Wallet() {
    const [money, setMoney] = React.useState(10000)
    return (
        <div>
            <h1>Wallet:${money}</h1>
        </div>
    )
}