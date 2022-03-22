import React from 'react'
import Money from './money';
export default function ShowDetails(props) {
    const [stockname, SetStockname] = React.useState("")
    const [quantity, setQuantity] = React.useState(0)
    const [addquantity, setAddquantity] = React.useState(0)
    React.useEffect(() => {
        SetStockname(props.name)
    }, [props.name]);
    function Clickadd() {
        setAddquantity(prev => parseInt(prev) + parseInt(quantity))
    }
    return (
        <div>
            <button>{stockname}</button>
            <input type="number" name='quantity' onChange={(event) => setQuantity(event.target.value)} />
            <button onClick={Clickadd}>Add</button>
            <h3>Shares: {addquantity}</h3>
            <Money name={addquantity} />
        </div>
    )
}