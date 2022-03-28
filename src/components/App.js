import React from 'react'
import Search from './search'
import SearchResults from './searchResults'
import StockDetails from './StockDetails'
import Mystocks from './myStocks'
import './styles/app.css'
export default function App() {
    const [name, setName] = React.useState()
    const [details, setDetails] = React.useState([])
    const [data, setData] = React.useState([])
    const [quantity, setQuantity] = React.useState()
    const [share, setShare] = React.useState([])
    const [money, setMoney] = React.useState(10000)
    console.log(data)
    return (
        <div className='appbody'>
            <Search setName={setName} />
            <SearchResults
                name={name}
                setData={setData}
                setDetails={setDetails}
                data={data}
                details={details}
            />
            <StockDetails
                details={details}
                setShare={setShare}
            />
            <Mystocks
                data={data}
                setData={setData}
                setQuantity={setQuantity}
                quantity={quantity}
                details={details}
                share={share}
                money={money}
                setMoney={setMoney}
            />
        </div>
    )
}