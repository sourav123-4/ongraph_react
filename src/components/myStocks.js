import React from 'react'
import MyStocksItem from './MyStocksItem'
import Wallet from './Wallet'
export default function MyStocks(props) {
    return (
        <div>
            <MyStocksItem data={props.data} setData={props.setData} />
            <Wallet />
        </div>
    )
}