import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Search from './search'
import SearchResults from './searchResults'
import StockDetails from './StockDetails'
import './styles/app.css'
export default function App(props) {
    const [name, setName] = React.useState()
    console.log(props.data)
    return (
        <div className='appbody'>
            <Search setName={setName} />
            <SearchResults
                name={name}
                setData={props.setData}
                setDetails={props.setDetails}
                data={props.data}
                details={props.details}
            />
            <StockDetails
                details={props.details}
                setShare={props.setShare}
            />

            <Link to="/mystocks"><button>MyStocks</button></Link>
            <Outlet />
        </div>
    )
}