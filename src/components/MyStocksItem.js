import React from 'react'
import './styles/mystocksitem.css'
export default function MyStocksItem(props) {
    function buyshares() {
        props.setAddquantity(prev => parseInt(prev) + parseInt(props.quantity))
        props.setMoney(10000 - parseInt(props.addquantity) * parseInt(props.price))
    }
    React.useEffect(() => {
        const fetchApi2 = async () => {
            const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${props.shareName}&apikey=0QENXP8HOKV0KWV2`
            const res = await fetch(url)
            const resjson1 = await res.json()
            console.log(resjson1['Global Quote']['05. price'])
            props.setPrice(resjson1['Global Quote']['05. price'])
        }
        fetchApi2()
    }, [props.shareName])
    console.log(props.addquantity)
    console.log(props.price)
    console.log(props.money)
    return (
        <div className='mystocksitem'>
            <h1>{props.shareName}</h1><h3>{props.price}</h3>
            <input
                type='text'
                name='quantity'
                placeholder='quantity'
                onChange={(event) => props.setQuantity(event.target.value)}
            />
            <button onClick={buyshares}>Buy</button>
            <h4>Shares : <span>{props.addquantity}</span></h4>
        </div>
    )
}