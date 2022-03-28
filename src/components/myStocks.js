import React from 'react'
import MyStocksItem from './MyStocksItem'
import Wallet from './Wallet'
import './styles/mystocks.css'
export default function MyStocks(props) {
    const [price, setPrice] = React.useState()
    const [addquantity, setAddquantity] = React.useState(0)
    return (
        <div className='mystocks'>
            <MyStocksItem
                data={props.data}
                setData={props.setData}
                setQuantity={props.setQuantity}
                setPrice={setPrice}
                quantity={props.quantity}
                price={price}
                addquantity={addquantity}
                setAddquantity={setAddquantity}
                details={props.details}
                share={props.share}
                setMoney={props.setMoney}
                money={props.money}
            />
            <Wallet
                price={price}
                quantity={props.quantity}
                addquantity={addquantity}
                money={props.money}
            />
        </div>
    )
}