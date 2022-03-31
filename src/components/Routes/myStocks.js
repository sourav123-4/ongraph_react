import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import MyStocksItem from '../MyStocksItem'
import Wallet from '../Wallet'
import '../styles/mystocks.css'
export default function MyStocks(props) {
    const [price, setPrice] = React.useState()
    const [addquantity, setAddquantity] = React.useState(0)
    const [removedata, setRemovedata] = React.useState([])
    const [shareName, setShareName] = React.useState()
    React.useEffect(() => {
        let arr = [...props.data]
        let index = arr.indexOf(removedata)
        arr.splice(index, 1)
        props.setData(arr)
    }, [removedata])
    return (
        <div className='mystocks'>
            <h1><u>MY STOCKS</u></h1>
            {props.data.map((item) => {
                return (
                    <h2><button onClick={() => { setShareName(item) }}>{item}</button><span></span><button onClick={() => {
                        setRemovedata(item)
                    }}>Remove</button>
                    </h2>
                )
            })}
            <MyStocksItem
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
                shareName={shareName}
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