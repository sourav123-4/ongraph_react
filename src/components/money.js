import React from 'react'
export default function Money(props) {
    const [money, setMoney] = React.useState(10000)
    const [value, setValue] = React.useState(140)
    const [share, setShare] = React.useState(props.name)
    function Buyclick() {
        setValue(item => parseInt(item) * parseInt(props.name))
        setMoney(item => parseInt(item) - parseInt(value))
    }
    // setMoney(item => parseInt(item) - parseInt(value))
    return (
        <div>
            <button onClick={Buyclick}>Buy</button>
            <h1>Wallet: {money}</h1>
            {console.log(value)}
        </div>
    )
}