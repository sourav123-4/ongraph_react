import React from 'react'
import './styles/mystocksitem.css'
export default function MyStocksItem(props) {
    const [removedata, setRemovedata] = React.useState([])
    React.useEffect(() => {
        let arr = [...props.data]
        let index = arr.indexOf(removedata)
        arr.splice(index, 1)
        props.setData(arr)
    }, [removedata])

    function buyshares() {
        props.setAddquantity(prev => parseInt(prev) + parseInt(props.quantity))
        props.setMoney(parseInt(props.money) - parseInt(props.addquantity) * parseInt(props.share))
    }
    return (
        <div className='mystocksitem'>
            <h1 >MY STOCKS</h1>
            {props.data.map((item) => {
                return (<div>
                    <h4>{item}<h5>price : {props.share}</h5><button onClick={() => {
                        setRemovedata(item)

                    }}>Remove</button>
                        <h3>{props.price}</h3>
                    </h4>
                    <input
                        type='text'
                        name='quantity'
                        placeholder='quantity'
                        onChange={(event) => props.setQuantity(event.target.value)}
                    />
                    <button onClick={buyshares}>Buy</button>
                    <h4>Shares:{props.addquantity}</h4>
                </div>)
            }
            )}
        </div>
    )
}