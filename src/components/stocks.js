import React from 'react'
import '../components/stocks.css'
import StocksDetails from './stockDetails'
import AddDetails from './adddetails'
export default function Stocks() {
    const [share, setShare] = React.useState(null)
    const [search, setSearch] = React.useState("")
    const [details, setDetails] = React.useState("")
    React.useEffect(() => {
        const fetchApi = async () => {
            const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=0QENXP8HOKV0KWV2`
            const response = await fetch(url)
            const resJson = await response.json()
            console.log(resJson)
            setShare(resJson)
        }
        if (search.length >= 3) {
            fetchApi()
        }
    }, [search])
    return (
        <div>
            <input
                type="search"
                className='input-box'
                name='searchinput'
                onChange={(event) => { setSearch(event.target.value) }}
            />
            {!share ? (<p>No data found</p>) :
                (<div className='div2tag'>
                    {share.bestMatches.map(item =>
                        <button
                            key={item['1. symbol']}
                            className="h2tag"
                            onClick={() => setDetails(item['1. symbol'])}>{item['1. symbol']}
                        </button>
                    )}
                </div>)}
            <StocksDetails name={details} />
            <AddDetails name={details} />
        </div>
    )
}