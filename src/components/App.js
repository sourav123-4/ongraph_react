import React from 'react'
import Search from './search'
import SearchResults from './searchResults'
import StockDetails from './StockDetails'
import Mystocks from './myStocks'
export default function App() {
    const [name, setName] = React.useState()
    const [details, setDetails] = React.useState([])
    const [data, setData] = React.useState([])
    console.log(data)
    return (
        <div>
            <Search setName={setName} />
            <SearchResults name={name} setData={setData} setDetails={setDetails} data={data} />
            <StockDetails details={details} />
            <Mystocks data={data} setData={setData} />
        </div>
    )
}